import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
import "./common.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/form-submit/:data" component={Home} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
