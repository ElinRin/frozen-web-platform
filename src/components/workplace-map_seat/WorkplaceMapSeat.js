import React, {useState} from "react";
import "./WorkplaceMapSeat.css";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  ListGroup, ListGroupItem, Modal as ModalArea,
  ModalBody, ModalFooter,
  ModalHeader
} from "reactstrap";


export const WorkplaceMapSeat = ({x, y, color, uid}) => {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);


  const toggle = () => {
    if (uid) {
      setModal(!modal);
    } else {
      setModal2(!modal2);
    }
  };

  return (
    <>
      <div style={{left: x, bottom: y, backgroundColor: color}}
           onClick={toggle}
           className="seat"></div>

      <ModalArea isOpen={modal}
                 toggle={toggle}
                 className="">
        <ModalHeader toggle={toggle}>Employee name</ModalHeader>
        <ModalBody>
          <h4>
            {uid}
          </h4>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalArea>

      <ModalArea isOpen={modal2}
                 toggle={toggle}
                 className="">
        <ModalHeader toggle={toggle}>Employee name</ModalHeader>
        <ModalBody>
          <h2>
            Free!
          </h2>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="success" onClick={toggle}>
            Sit here
          </Button>
        </ModalFooter>
      </ModalArea>
    </>
  );
};


