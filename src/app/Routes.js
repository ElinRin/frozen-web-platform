import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login, Home, Main } from "../pages";
import { MainNavbar } from "../components";

import "./App.css";

export const Routes = () => (
  <Router>
    <div className="app">
      <MainNavbar />
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/main" render={() => <Main />} />
        <Route exact path="/employee/:id" render={() => <Home />} />
      </Switch>
    </div>
  </Router>
);
