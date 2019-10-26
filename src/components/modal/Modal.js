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
import { RadioButtons } from "../radio-buttons/RadioButtons";

export const Modal = ({ buttonLabel, className }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        {buttonLabel}
      </Button>
      <ModalArea isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Request Time Off</ModalHeader>
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
            <RadioButtons />
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
