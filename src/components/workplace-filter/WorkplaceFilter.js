import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { ThreeStageToggle } from "..";

import "./WorkplaceFilter.css";

export const WorkplaceFilter = ({ workPlaceList, setListDisplay }) => {
  const [params, setParams] = useState([
    { key: "window", name: "Window", value: null },
    { key: "twoMonitors", name: "2 monitors", value: null },
    { key: "headphones", name: "Headphones", value: null },
    { key: "plants", name: "Plants", value: null },
    { key: "openSpace", name: "Open space", value: null }
  ]);

  const updateParams = (index, newValue) => {
    const oldParams = params;
    oldParams[index].value = newValue;
    setParams(oldParams);
    doFilter();
  };

  const doFilter = () => {
    const oldParams = params;
    const filteredParams = oldParams.filter(param => param.value !== null);
    const newValues = filteredParams.reduce((newValues, parameter) => {
      return newValues.filter(seat => seat[parameter.key] === parameter.value);
    }, workPlaceList);

    setListDisplay(newValues);
  };

  return (
    <div>
      {params.map((value, index) => (
        <div key={index} className="mt-4">
          <ThreeStageToggle
            index={index}
            updateValue={updateParams}
            name={value.name}
          />
        </div>
      ))}
    </div>
  );
};
