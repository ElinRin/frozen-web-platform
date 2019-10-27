import React, { useState } from "react";
import {
  Button,
  Modal as ModalArea,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  ListGroup,
  ListGroupItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "./ModalNewEvent.css";

export const ModalNewEvent = ({ className, room }) => {
  const [modal, setModal] = useState(false);
  const [members, setMembers] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(room);

  const toggle = () => setModal(!modal);

  const updMembers = element => {
    return () => setMembers([...members, element]);
  };

  const setSuggestedRoom = () => {
    setSelectedRoom("Room 2 ");
  };

  const changeValue = e => {
    setSelectedRoom(e.target.innerText);
  };

  return (
    <div style={{ float: "left" }}>
      <Button color="primary" style={{ float: "left" }} onClick={toggle}>
        Add new event
      </Button>
      <ModalArea isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add new event</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="eventName">Event name</Label>
              <Input type="text" id="eventName" />
            </FormGroup>
            <FormGroup>
              <Label for="eventResponsible">Responsible</Label>
              <Input type="text" id="eventResponsible" />
            </FormGroup>
            <FormGroup>
              <Label for="eventDate">Event date</Label>
              <Input type="date" id="eventDate" />
            </FormGroup>
            <FormGroup>
              <Label for="eventMembers">Members</Label>
              <InputGroup>
                <Input placeholder="User search" />
                <InputGroupAddon addonType="append">
                  <Button onClick={updMembers("Ilon Mask")}>Add</Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <ListGroup>
              {members.map(name => {
                return <ListGroupItem>{name}</ListGroupItem>;
              })}
            </ListGroup>
          <FormGroup>
            <div className="grid-wrapper">
              <div>
                <UncontrolledDropdown>
                  <DropdownToggle caret>{selectedRoom}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>First floor</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={changeValue} dropDownValue="room1">
                      Room 1{" "}
                    </DropdownItem>
                    <DropdownItem onClick={changeValue} dropDownValue="room2">
                      Room 2{" "}
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            <Button onClick={setSuggestedRoom} color="primary">
              Suggest
            </Button>
          </div>
          </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Submit
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalArea>
    </div>
  );
};
