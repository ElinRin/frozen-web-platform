import React from "react";
import { useRoutes } from "hookrouter";
import { BrowserRouter as Router } from "react-router-dom";

import { Login, Home, Main, Workplace, Meetings, Colleagues } from "../pages";
import { MainNavbar, NoPageFound } from "../components";

import "./App.css";

const routes = {
  "/": () => <Login />,
  "/login": () => <Login />,
  "/main": () => <Main />,
  "/u/:id": ({ id }) => <Home userId={id} />,
  "/workplace": () => <Workplace />,
  "/colleagues": () => <Colleagues />,
  "/meetings": () => <Meetings />
};

export const Routes = () => {
  const routeResult = useRoutes(routes);
  return (
    <Router>
      <div className="app">
        <MainNavbar />
        {routeResult || <NoPageFound />}
      </div>
    </Router>
  );
};
