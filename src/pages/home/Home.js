import React from "react";

import { Profile } from "../../components/profile/Profile";

export const Home = ({ match, location }) => (
  <div className="home-container">
    {/* {console.log({ match, location })} */}
    <Profile />
  </div>
);
