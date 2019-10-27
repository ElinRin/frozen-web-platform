import React from "react";

import { Profile } from "../../components";

export const Home = ({ userId }) => (
  <div className="home-container">
    <Profile userId={userId} />
  </div>
);
