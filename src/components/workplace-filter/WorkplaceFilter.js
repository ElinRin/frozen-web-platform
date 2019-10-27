import React, {useState} from "react";
import {Col, Container, Row, Media, Table, InputGroup, InputGroupAddon, Input} from "reactstrap";
import {ThreeStageToggle, WorkplaceMap} from "..";


import "./WorkplaceFilter.css";

export const WorkplaceFilter = () => {

  const mockedList = [
    {x: 107, y: 52, window: true, plants: true, headphones: true, openSpace: true, twoMonitors: true},
    {x: 230, y: 128, window: false, plants: false, headphones: false, openSpace: true, twoMonitors: true},
    {x: 257, y: 252, window: true, plants: true, headphones: true, openSpace: true, twoMonitors: false},
    {x: 211, y: 221, window: true, plants: true, headphones: false, openSpace: false, twoMonitors: false},
    {x: 133, y: 52, window: false, plants: false, headphones: true, openSpace: true, twoMonitors: true},
    {x: 347, y: 72, window: false, plants: true, headphones: true, openSpace: true, twoMonitors: true},
    {x: 342, y: 131, window: true, plants: false, headphones: false, openSpace: false, twoMonitors: true},
    {x: 368, y: 131, window: false, plants: true, headphones: true, openSpace: false, twoMonitors: false}
  ];

  const [params, setParams] = useState([
    {key: 'window', name: 'Window', value: null},
    {key: 'twoMonitors', name: '2 monitors', value: null},
    {key: 'headphones', name: 'Headphones', value: null},
    {key: 'plants', name: 'Plants', value: null},
    {key: 'openSpace', name: 'Open space', value: null}
  ]);

  const [listToDisplay, setListDisplay] = useState(mockedList);

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
      }, mockedList);

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

        <Col lg="9">
          <WorkplaceMap listToDisplay={listToDisplay}/>
        </Col>
      </Row>
    </Container>
  )
};
