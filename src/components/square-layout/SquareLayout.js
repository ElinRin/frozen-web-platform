import React from "react";
import {
  Col,
  Container,
  Row,
  Button
} from "reactstrap";

import './SquareLayout.css'
import { Modal } from "../modal/Modal";

export const SquareLayout = () => (
  <Container >
    <Row>
      <Col xs="5" className='wrapper-sq-l'>
        <h5>Vacation</h5>
        <Modal
          buttonLabel="25 дней"
        />
      </Col>
      <Col xs="5" className='wrapper-sq-l'>
        <h5>Sick leave</h5>
        <Modal
          buttonLabel="25 дней"
        />
      </Col>
    </Row>
    <Row>
      <Col xs="5" className='wrapper-sq-l'>
        <h5>Remote work</h5>
        <Modal
          buttonLabel="25 дней"
        />
      </Col>
    </Row>
  </Container>
);
