import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { CustomCalendar, MeetingMap, ModalNewEvent } from "../../components";

import "./Meetings.css";

export const Meetings = () => {
  const [roomName, setRoomName] = useState("roomName");
  const openNewEventModal = roomName => {
    setRoomName(roomName);
  };

  return (
    <Container>
      <Row>
        <Col className="meetings-wrapper">
          <div className="meetings-header">
            <ModalNewEvent />
            <h1 style={{ textAlign: "right" }}>Your calendar</h1>
          </div>
          <CustomCalendar />
        </Col>
      </Row>
      <Row>
        <Col className="meetings-wrapper">
          <h1 className="meetings-header">Map of conference rooms</h1>
          <MeetingMap openModal={openNewEventModal}></MeetingMap>
        </Col>
      </Row>
    </Container>
  );
};
