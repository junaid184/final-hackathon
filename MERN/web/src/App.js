import Login from "./Components/Login";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
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
            <Button color="error" variant="contained">
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
