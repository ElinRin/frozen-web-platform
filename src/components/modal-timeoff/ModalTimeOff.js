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

import "./ModalTimeOff.css"

export const ModalTimeOff = ({ typeLabel, daysLabel, className }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className="modal-time-off-button" onClick={toggle}>
        <div style={{ fontWeight: 'bold' }}>{typeLabel}</div>
        <div>{daysLabel}</div>
      </div>
      <ModalArea isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Request Time Off: {typeLabel}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="dateFrom">From</Label>
              <Input type="date" id="dateFrom" />
            </FormGroup>
            <FormGroup>
              <Label for="dateTo">To</Label>
              <Input type="date" id="dateTo" />
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
