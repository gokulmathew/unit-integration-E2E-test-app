import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Users from "./Users";

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
