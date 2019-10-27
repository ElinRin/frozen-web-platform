import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ModalNewEvent } from "../modal-new-event/ModalNewEvent";

import map from "../../mocks/office-map.jpg";
import plus from "../../mocks/plus_svg.svg";

import "./MeetingMap.css";

export const MeetingMap = ({ openModal }) => {
  const [modal, setModal] = useState(false);
  const [room, setRoom] = useState("");
  const toggle = e => {
    setModal(!modal);
    console.log(e.target.id);
    setRoom(e.target.id);
  };
  const newEvent = e => {
    toggle();
  };

  return (
    <>
      <div className="m_map">
        <img className="map-image" src={map} alt="" />
        {/*left: 20rem;
    bottom: 26rem;*/}
        <img
          className="plus-svg"
          id="Room 1"
          style={{ left: "8rem", bottom: "21rem" }}
          onClick={toggle}
          src={plus}
          alt=""
        ></img>
        <img
          className="plus-svg"
          id="Room 2"
          style={{ left: "7rem", bottom: "9rem" }}
          onClick={toggle}
          src={plus}
          alt=""
        />
      </div>

      <Modal isOpen={modal} fade={false} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Room name</ModalHeader>
        <ModalBody>
          11.00 - 12.20 - Daily stand-up.
          <br />
          14.30 - 15.00 - Table football.
        </ModalBody>
        <ModalFooter>
          <ModalNewEvent room={room} closePrevModal={newEvent} />
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
