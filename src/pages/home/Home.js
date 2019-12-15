import React from "react";

import { Profile, Loader } from "../../components";

export const Home = ({ userId }) => {
  return userId ? (
    <div className="home-container">
      <Profile userId={userId} />
    </div>
  ) : (
    <Loader />
  );
};
