import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login, Home, Main, Workplace, Parking } from "../pages";
import { MainNavbar } from "../components";

import "./App.css";

export const Routes = () => (
  <Router>
    <div className="app">
      <MainNavbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/employee/:id" component={Home} />
        <Route exact path="/employee/:id/workplace" component={Workplace} />
        <Route exact path="/parking" component={Parking} />
      </Switch>
    </div>
  </Router>
);
