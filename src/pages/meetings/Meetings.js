import React from "react";
import { Col, Container, Row } from "reactstrap";
import { CustomCalendar } from "../../components/calendar/CustomCalendar";
import { ModalNewEvent } from "../../components/modal-new-event/ModalNewEvent";

import "./Meetings.css"

export const Meetings = () => (
    <Container>
      <Row>
        <Col className="meetings-wrapper">
          <div className="meetings-header">
            <ModalNewEvent />
            <h1 style={{textAlign: 'right'}}>Your calendar</h1>
          </div>
          <CustomCalendar />
        </Col>
      </Row>
      <Row>
        <Col className="meetings-wrapper">
          <h1 className="meetings-header">Map of conference rooms</h1>
          Здесь карта переговорок
        </Col>
      </Row>
    </Container>

);
