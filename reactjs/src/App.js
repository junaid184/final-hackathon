import React from "react";
import LoginPage from "./pages/LoginPage";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import CheckRequest from './pages/CheckRequest';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
