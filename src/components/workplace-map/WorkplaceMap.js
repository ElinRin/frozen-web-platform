import React from "react";

import map from "../../mocks/office-map.jpg";
import { WorkplaceMapSeat } from "..";

import "./WorkplaceMap.css";

export const WorkplaceMap = ({ listToDisplay }) => {
  return (
    <div className="wrapper">
      <div className="map">
        <img className="map-image" src={map} alt="" />
        {listToDisplay.map((item, i) => (
          <WorkplaceMapSeat
            x={item.x}
            y={item.y}
            color={item.UID === undefined ? "#1c7430" : "#e20074"}
            uid={item.UID}
            key={`${item.x}${item.y}`}
          />
        ))}
      </div>
    </div>
  );
};
