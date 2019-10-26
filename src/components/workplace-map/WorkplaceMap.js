import React from "react";


import map from "../../mocks/office-map.jpg";
import {WorkplaceMapSeat} from '..';

import "./WorkplaceMap.css";

export const WorkplaceMap = () => {
    const mockArray = [
        {x: 107, y: 52, color: '#1c7430'},
        {x: 230, y: 128, color: '#e20074'},
        {x: 257, y: 252, color: '#1c7430'},
        {x: 211, y: 221, color: '#1c7430'}
    ];

    return (
        <div className="map">
            <img className="map-image" src={map}/>
            {
                mockArray.map((item, i) => <WorkplaceMapSeat
                    x={item.x}
                    y={item.y}
                    color={item.color}
                    key={`${item.x}${item.y}`}/>)
            }
        </div>
    )
};
