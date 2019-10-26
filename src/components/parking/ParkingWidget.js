import React from "react";
import "./ParkingWidget.css";

function renderPlaces() {
  let places = [];
  places.push(
    <div className="park-place">1
      <div className="icon">✓</div>
    </div>);
  return places;
}

export const ParkingWidget = () => (
  <div className="parking-widget">
    <div className="parking-widget-container">
      <div className="p-row">
        { renderPlaces() }
      </div>
    </div>
  </div>
);
