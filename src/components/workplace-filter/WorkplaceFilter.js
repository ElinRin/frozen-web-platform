import React, {useState, useContext, useEffect} from "react";
import {Col, Container, Row, Media, Table, InputGroup, InputGroupAddon, Input} from "reactstrap";
import {ThreeStageToggle, WorkplaceMap} from "..";


import "./WorkplaceFilter.css";

export const WorkplaceFilter = ({ workPlaceList, setListDisplay}) => {

  const [params, setParams] = useState([
    {key: 'window', name: 'Window', value: null},
    {key: 'twoMonitors', name: '2 monitors', value: null},
    {key: 'headphones', name: 'Headphones', value: null},
    {key: 'plants', name: 'Plants', value: null},
    {key: 'openSpace', name: 'Open space', value: null}
  ]);

  const updateParams = (index, newValue) => {
    const oldParams = params;
    oldParams[index].value = newValue;
    setParams(oldParams);
    doFilter();
  };

  const doFilter = () => {
    const oldParams = params;
    const filteredParams = oldParams.filter(param => param.value !== null);
    const newValues = filteredParams.reduce(
      (newValues, parameter) => {
        return newValues.filter(seat => seat[parameter.key] === parameter.value);
      }, workPlaceList);

    setListDisplay(newValues);
  };

  return (
    <Container className="wrapper">
      <Row>
        <Col lg="3">
          <Row>
            {
              params.map((value, index) => (
                <Col className="mt-4">
                  <ThreeStageToggle key={index} index={index}
                                    updateValue={updateParams}
                                    name={value.name}/>
                </Col>
              ))
            }

          </Row>
        </Col>
      </Row>
    </Container>
  )
};
