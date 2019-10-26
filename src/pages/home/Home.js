import React from "react";

import { Profile } from "../../components/profile/Profile";

export const Home = ({ userId }) => (
  <div className="home-container">
    <Profile userId={userId}/>
  </div>
);
