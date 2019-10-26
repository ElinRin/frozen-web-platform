import React from "react";
import "./WorkplaceMapSeat.css";


export const WorkplaceMapSeat = ({x, y, color}) => (
    <div style={{left: x, bottom: y, 'background-color': color}}
        className="seat"></div>
);

