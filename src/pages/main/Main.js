import React from "react";
import {
  Col,
  Container,
  Row,
  Media
} from "reactstrap";
import { SquareLayout } from "../../components/square-layout/SquareLayout";

import photo from "../../mocks/photo_example.jpg";
import "./Main.css";

export const Main = () => (
  <Container className="wrapper">
    <Row>
      <Col xs="2">
        <Media src={photo} className="profile-photo-small"/>
      </Col>
      <Col xs="2">
        <h3>Everett Soto</h3>
        <h5>On work</h5>
      </Col>
      <Col xs="8">
        <div>Here will be dates of birthdays</div>
      </Col>
    </Row>
    <Row className="info">
      <Col xs="4">
        <SquareLayout />
      </Col>
      <Col xs="8">
        Here will be news
      </Col>
    </Row>
  </Container>
);
