import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login, Home } from "../pages";
import { MainNavbar } from "../components";

import "./App.css";

export const Routes = () => (
  <Router>
    <div className="app">
      <MainNavbar />
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/user/:id" render={() => <Home />} />
      </Switch>
    </div>
  </Router>
);
