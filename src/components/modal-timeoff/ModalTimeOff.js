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

import "./ModalTimeOff.css";
import { firebaseTools } from "../../utils/firebase";


export const ModalTimeOff = ({ typeLabel, daysLabel, className }) => {
  const [modal, setModal] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [comment, setComment] = useState("");
  const [daysError, setDaysError] = useState(false);

  const label = {
    everyYearVacation: "Every Year Vacation",
    leaveWithoutPay: "Leave Without Pay",
    sickLeave: "Sick Leave",
    remoteWork: "Remote Work",
    conference: "Conference"
  };

  const toggle = () => {
    setStartDate("");
    setFinishDate("");
    setComment("");
    return setModal(!modal);
  };

  const submit = () => {
    firebaseTools.changeStatus("not available");
    const sd = new Date(startDate);
    const fd = new Date(finishDate);
    const num = (fd - sd) / (24 * 60 * 60 * 1000) + 1;
    console.log(num);
    if (num > daysLabel) {
      setDaysError(true);
    }
    else {
      setDaysError(false);
      firebaseTools.dayOffUpdate(typeLabel, daysLabel - num);
      firebaseTools.newEvent({
        event: label[typeLabel],
        startDate: startDate,
        finishDate: finishDate,
        comment: comment
      });
      return setModal(!modal)
    }
  };

  return (
    <div>
      <div className="modal-time-off-button" onClick={toggle}>
        <div style={{ fontWeight: "bold" }}>{label[typeLabel]}</div>
        <div>{`${daysLabel} days`}</div>
      </div>
      <ModalArea isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Request Time Off: {label[typeLabel]}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="startDate">From</Label>
              <Input
                type="date"
                id="startDate"
                value={startDate}
                onChange={({currentTarget: {value}}) => setStartDate(value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="finishDate">To</Label>
              <Input
                type="date"
                id="finishDate"
                value={finishDate}
                onChange={({currentTarget: {value}}) => setFinishDate(value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="comment">Comment</Label>
              <Input
                type="text"
                id="comment"
                value={comment}
                onChange={({currentTarget: {value}}) => setComment(value)}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {daysError && <div>Error: you don't have enough days</div>}
          <Button color="primary" onClick={submit}>
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
