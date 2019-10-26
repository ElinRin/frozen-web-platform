import React from "react";
import {
  Col,
  Container,
  Row,
  Button
} from "reactstrap";

import './SquareLayout.css'

export const SquareLayout = () => (
  <Container >
    <Row>
      <Col xs="5" className='wrapper-sq-l'>
        <h5>Vacation</h5>
        <Button color='primary'>25 дней</Button>
      </Col>
      <Col xs="5" className='wrapper-sq-l'>
        <h5>Sick leave</h5>
        <Button color='primary'>6 дней</Button>
      </Col>
    </Row>
    <Row>
      <Col xs="5" className='wrapper-sq-l'>
        <h5>Remote work</h5>
        <Button color='primary'>6 дней</Button>
      </Col>
    </Row>
  </Container>
);
