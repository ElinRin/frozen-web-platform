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
  Label
} from "reactstrap";

export const ModalNewEvent = ({ className }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div style={{ float: 'left' }}>
        <Button color="primary" style={{ float: 'left' }} onClick={toggle}>
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
              {
                [...Array(5).keys()].map(i => {
                  return  <Input type="text" id={`eventMembers:${i}`} />
                })
              }
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
