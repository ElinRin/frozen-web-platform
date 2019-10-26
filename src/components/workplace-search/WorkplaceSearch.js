import React from "react";
import { Col, Container, Row, Media, Table, InputGroup, InputGroupAddon,  Input } from "reactstrap";


import "./WorkplaceSearch.css";
import Button from "reactstrap/es/Button";

export const WorkplaceSearch = () => {



    return (
      <Container className="wrapper">
          <Row>
              <Col>
                  <InputGroup>
                      <Input placeholder="username"/>
                      <InputGroupAddon addonType="append">
                          <Button>Search</Button>
                      </InputGroupAddon>
                  </InputGroup>
              </Col>
          </Row>
      </Container>
    )
};
