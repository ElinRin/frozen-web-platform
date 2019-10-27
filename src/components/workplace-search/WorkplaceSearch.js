import React, {useState, useContext} from "react";
import {Col, Container, Row, Media, Table, InputGroup, InputGroupAddon, Input} from "reactstrap";


import "./WorkplaceSearch.css";
import Button from "reactstrap/es/Button";
import {loginUser, searchUserByFullName} from "../../actions/user";
import {UsersInfoContext, WorkPlaceInfoContext} from "../../app/Context";
import {searchWorkPlaceByUserId} from "../../actions/workPlace";

export const WorkplaceSearch = ({ setListDisplay }) => {

  const [fullName, setFullName] = useState('');
  const [usersInfo, usersInfoDispatch] = useContext(UsersInfoContext);
  const [workPlaceInfo, workPlaceInfoDispatch] = useContext(WorkPlaceInfoContext);

  const handleSubmit = async event => {
    event.preventDefault();
    await searchUserByFullName(fullName, usersInfoDispatch);
    const userId = usersInfo.fullNameSearch;
    if (typeof userId == "undefined") {
      setFullName('');
    } else {
      await searchWorkPlaceByUserId(userId, workPlaceInfoDispatch);
    }
  };

  return (
    <Container className="wrapper search-container">
      <Row>
        <Col>
          <InputGroup>
            <Input
              placeholder="Full Name"
              type="text"
              value = {fullName}
              onChange={({ currentTarget: { value } }) => setFullName(value)}
            />
            <InputGroupAddon addonType="append">
              <Button onClick={handleSubmit}>Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
};
