import React from "react";
import { Spinner } from "reactstrap";

import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner
        style={{ width: "100px", height: "100px" }}
        color="primary"
        type="grow"
      />
    </div>
  );
};
