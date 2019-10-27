import React, { useState } from "react";

import "./ThreeStageToggle.css";

export const ThreeStageToggle = ({ index, name, updateValue }) => {
  const [inputValue, setInputValue] = useState("neutral");

  const onChecked = event => {
    setInputValue(event.target.value);
    switch (event.target.value) {
      case "off":
        updateValue(index, false);
        break;
      case "neutral":
        updateValue(index, null);
        break;
      case "on":
        updateValue(index, true);
        break;
      default:
        break;
    }
  };

  return (
      <div className="grid-container">
        <div className="label">
          <p className="label-text">{name}</p>
        </div>
        <div key={index} className="switcher">
          <label
            className="switcher-label switcher-off"
            htmlFor={`off${index}`}
          >
            off
          </label>
          <input
            id={`off${index}`}
            className="switcher-radio-off"
            type="radio"
            name={`value${index}`}
            onChange={onChecked}
            value="off"
          />

          <label
            className="switcher-label switcher-neutral"
            htmlFor={`neutral${index}`}
          >
            neutral
          </label>
          <input
            id={`neutral${index}`}
            className="switcher-radio-neutral"
            type="radio"
            name={`value${index}`}
            onChange={onChecked}
            value="neutral"
          />

          <label className="switcher-label switcher-on" htmlFor={`on${index}`}>
            on
          </label>
          <input
            id={`on${index}`}
            className="switcher-radio-on"
            type="radio"
            onChange={onChecked}
            name={`value${index}`}
            value="on"
          />

          <div className={`switcher-slider st_${inputValue}`}></div>
        </div>
      </div>
  );
};
