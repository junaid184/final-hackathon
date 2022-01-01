import express from "express";
import cors from "cors";
import path from "path";
import { stringToHash, varifyHash } from "bcrypt-inzi";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import { createServer } from "http";
import { Server } from "socket.io";
import mongoose from "mongoose";
const DBURL =
  "mongodb+srv://khana:khana@cluster0.6jcs2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(DBURL);
const SECRET = process.env.SECRET || "12345";
const PORT = process.env.PORT || 8000;
const app = express();
const __dirname = path.resolve();
const ADMIN = mongoose.model("Admins", {
  email: String,
  password: String,
  created: {
    type: Date,
    default: Date.now,
  },
});
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8000"],
    credentials: true,
  })
);
// app.use("/", express.static(path.join(__dirname, "web/build")));
// app.get("/", (req, res, next) => {
//   res.sendFile(path.join(__dirname, "./web/build/index.html"));
//   // res.redirect("/")
// });
app.post("/api/v1/createadmin", (req, res) => {
  ADMIN.findOne({ email: req.body.email }, (err, email) => {
    if (err) {
      res.status(500).send("error in getting database");
    } else if (email) {
      res.status(403).send("email already exist");
    } else {
      stringToHash(req.body.password)
        .then((passwordHash) => {
          console.log("hash: ", passwordHash);
          let newADMIN = new ADMIN({
            email: req.body.email,
            password: passwordHash,
          });
          newADMIN.save(() => {
            console.log("data Saved");
            res.send("new admin has been created");
          });
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  });
});
// app.use((req, res, next) => {
//   jwt.verify(req.cookies.token, SECRET, (err, decoded) => {
//     req.body._decoded = decoded;

//     if (!err) {
//       next();
//     } else {
//       res.status(401).sendFile(path.join(__dirname, "./web/build/index.html"));
//     }
//   });
// });
// app.get("/**", (req, res, next) => {
//   // res.sendFile(path.join(__dirname, "./web/build/index.html"))
//   res.redirect("/");
// });
const server = createServer(app);

const io = new Server(server, { cors: { origin: "*", methods: "*" } });

io.on("connection", (socket) => {
  console.log("New client connected with id: ", socket.id);

  // to emit data to a certain client
  socket.emit("topic 1", "some data");

  // collecting connected users in a array
  // connectedUsers.push(socket)

  socket.on("disconnect", (message) => {
    console.log("Client disconnected with id: ", message);
  });
});

server.listen(PORT, function () {
  console.log("server is running on", PORT);
});
