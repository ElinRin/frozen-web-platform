import React, { useState, useContext, useEffect } from "react";
import "./WorkplaceMapSeat.css";
import {
  Button,
  Col,
  Media,
  Modal as ModalArea,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";
import { UsersInfoContext, WorkPlaceInfoContext } from "../../app/Context";
import { fetchUser } from "../../actions/user";
import { navigate } from "hookrouter";
import { reserveWorkPlace } from "../../actions/workPlace";

export const WorkplaceMapSeat = ({ id, x, y, color, uid }) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [usersInfo, usersInfoDispatch] = useContext(UsersInfoContext);
  const [workPlaceInfo, workPlaceInfoDispatch] = useContext(
    WorkPlaceInfoContext
  );

  useEffect(() => {
    if (uid) {
      fetchUser(uid, usersInfoDispatch);
    }
  }, [uid, usersInfoDispatch]);

  const toggle = () => {
    if (uid) {
      setModal(!modal);
    } else {
      setModal2(!modal2);
    }
  };

  return (
    <>
      <div
        style={{ left: x, bottom: y, backgroundColor: color }}
        onClick={toggle}
        className="seat"
      ></div>

      <ModalArea isOpen={modal} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>This work place is not free</ModalHeader>
        <ModalBody onClick={() => navigate(`/u/${uid}`)}>
          <Col>
            <Media
              src={
                typeof usersInfo[uid] !== "undefined"
                  ? usersInfo[uid].profileImage
                  : ""
              }
              className="profile-photo-small"
            />
          </Col>
          <Col>
            <h3>
              {typeof usersInfo[uid] !== "undefined"
                ? usersInfo[uid].fullName
                : ""}
            </h3>
            <h4>
              {typeof usersInfo[uid] !== "undefined"
                ? usersInfo[uid].status
                : ""}
            </h4>
          </Col>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalArea>

      <ModalArea isOpen={modal2} toggle={toggle} className="">
        <ModalHeader toggle={toggle}>This work place is free</ModalHeader>
        <ModalBody>
          <h2>You can sit here.</h2>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button
            color="primary"
            onClick={() => {
              reserveWorkPlace(id, workPlaceInfoDispatch);
              setModal2(!modal2);
            }}
          >
            Sit here
          </Button>
        </ModalFooter>
      </ModalArea>
    </>
  );
};
