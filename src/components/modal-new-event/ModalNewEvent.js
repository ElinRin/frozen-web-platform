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
  Label, InputGroup, InputGroupAddon, ListGroup, ListGroupItem
} from "reactstrap";

export const ModalNewEvent = ({ className }) => {
  const [modal, setModal] = useState(false);
  const [members, setMembers] = useState([]);
  const toggle = () => {
    setModal(!modal);
  };

  const updMembers = (element) => { return () => setMembers([...members, element]) };

  return (
    <div style={{ float: 'left' }}>
        <Button color="primary"
                style={{ float: 'left' }}
                onClick={toggle}>
          Add new event
        </Button>
      <ModalArea isOpen={modal}
                 toggle={toggle}
                 className={className}>
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
                <Input placeholder="User search"/>
                <InputGroupAddon addonType="append">
                  <Button onClick={updMembers('Ilon Mask')}>Add</Button>
                </InputGroupAddon>
              </InputGroup>
            </FormGroup>
            <ListGroup>
              {
                members.map(name => {
                  return <ListGroupItem>{name}</ListGroupItem>
                })
              }
            </ListGroup>
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
