import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login, Home } from "../pages";
import { Navbar } from "../components";

export const Routes = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/user/:id" render={() => <Home />} />
      </Switch>
    </div>
  </Router>
);
