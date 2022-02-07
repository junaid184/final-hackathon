import Login from "./Components/Login";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./Components/dashboard";
import { GlobalContext } from "./context/Context";
import { useContext, useEffect } from "react";
import Splash from "./Components/Splash";
import axios from "axios";
const dev = "http://localhost:8000";
const baseURL =
  window.location.hostname.split(":")[0] === "localhost" ? dev : "";
function App() {
  let navigate = useNavigate();
  const { state, dispatch } = useContext(GlobalContext);
  const logout = () => {
    axios
      .post(`${baseURL}/api/v1/logout`, {}, { withCredential: true })
      .then((res) => {
        dispatch({
          type: "USER_LOGOUT",
        });
      });
  };
  useEffect(() => {
    axios
      .get(`${baseURL}/api/v1/profile`, { withCredential: true })
      .then((res) => {
        dispatch({
          type: "USER_LOGIN",
          payload: {
            email: res.data.email,
            _id: res.data._id,
          },
        });
      })
      .catch((e) => {
        dispatch({ type: "USER_LOGOUT" });
      });
    return () => {
      console.log("cleanup");
    };
  }, []);
  return (
    <div className="App">
      {state?.user?.email ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="success">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={() => navigate("/")}
              >
                Admin Pannel
              </Typography>
              <Button color="error" variant="contained" onClick={logout}>
                Log Out
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="success">
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={() => navigate("/")}
              >
                Admin Pannel
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      )}
      {state?.user === undefined ? (
        <Routes>
          <Route path="/" element={<Splash />} />
        </Routes>
      ) : null}
      {state?.user == null ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : null}
      {state?.user?.email ? (
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      ) : null}
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}
    </div>
  );
}

export default App;
