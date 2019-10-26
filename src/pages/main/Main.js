import React from "react";
import {
  Col,
  Container,
  Row,
  Media, Button
} from "reactstrap";
import { DaysOffLayout } from "../../components/daysoff-layout/DaysOffLayout";
import { BirthdaysLayout } from "../../components/birthdays-layout/BirthdaysLayout";

import photo from "../../mocks/photo_example.jpg";
import "./Main.css";

export const Main = () => (
  <Container className="wrapper-large">
    <Row>
      <Col xs="2">
        <Media src={photo} className="profile-photo-small"/>
      </Col>
      <Col xs="2">
        <h3>Everett Soto</h3>
        <Button
          color='primary'
          className="profile-button"
          onClick={() => {}} // TODO: менять статус при нажатии
        >
          On work
        </Button>
      </Col>
      <Col xs="8">
        <BirthdaysLayout />
      </Col>
    </Row>
    <Row className="info">
      <Col xs="4">
        <div className="wrapper-days-off">
          <DaysOffLayout />
        </div>
      </Col>
      <Col xs="8">
        Here will be news
      </Col>
    </Row>
  </Container>
);
