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
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/employee/:id" component={Home} />
        <Route
          exact
          path="/employee/:id/workplace"
          render={() => <Workplace />}
        />
        <Route exact path="/parking" render={() => <Parking />} />
      </Switch>
    </div>
  </Router>
);
