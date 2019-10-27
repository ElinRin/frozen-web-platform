import React from "react";


import map from "../../mocks/office-map.jpg";
import {WorkplaceMapSeat} from '..';

import "./WorkplaceMap.css";

export const WorkplaceMap = ({listToDisplay}) => {
  return (
    <div className="map">
      <img className="map-image" src={map}/>
      {
        listToDisplay.map((item, i) =>
          <WorkplaceMapSeat
            x={item.x}
            y={item.y}
            color="#1c7430"
            key={`${item.x}${item.y}`}/>)
      }
    </div>
  )
};
