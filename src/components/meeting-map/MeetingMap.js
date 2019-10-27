import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ModalNewEvent } from "../modal-new-event/ModalNewEvent";

import map from "../../mocks/office-map.jpg";
import plus from "../../mocks/plus_svg.svg";

import "./MeetingMap.css";

export const MeetingMap = ({ openModal }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const newEvent = () => {
    toggle();
  };

  return (
    <>
      <div className="m_map">
        <img className="map-image" src={map} alt="" />
        <img className="plus-svg" onClick={toggle} src={plus} alt=""></img>
      </div>

      <Modal isOpen={modal} fade={false} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>Room name</ModalHeader>
        <ModalBody>
          11.00 - 12.20 - Daily stand-up.
          <br />
          14.30 - 15.00 - Table football.
        </ModalBody>
        <ModalFooter>
          <ModalNewEvent closePrevModal={newEvent} />
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
