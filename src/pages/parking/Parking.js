import React from "react";
import { Container } from "reactstrap";
import { ParkingWidget } from '../../components/parking/ParkingWidget'
import "./Parking.css";
export const Parking = () => (
  <div className="parking-container">
    <Container className="wrapper">
      <h1>Parking</h1>
      <p>Please choose free place to park your auto.</p>
      <ParkingWidget/>
    </Container>
  </div>
);
