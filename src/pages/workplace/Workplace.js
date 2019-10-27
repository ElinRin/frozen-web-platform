import React, { useEffect, useState, useContext } from "react";

import { WorkplaceSearch, WorkplaceFilter, WorkplaceMap } from "../../components";
import { WorkPlaceInfoContext } from "../../app/Context";
import { fetchWorkPlaceListByFloor } from "../../actions/workPlace";
import { Col, Container, Row } from "reactstrap"

import "./Workplace.css"

export const Workplace = () => {

  const [workPlaceInfo, workPlaceInfoDispatch] = useContext(WorkPlaceInfoContext);
  useEffect(async () => {
    await fetchWorkPlaceListByFloor(0, workPlaceInfoDispatch)
  }, []);

  const workPlaceList = workPlaceInfo.workPlaceList || [];
  const [listToDisplay, setListDisplay] = useState(workPlaceList);
  // console.log(workPlaceInfo);

  return (
    <Container>
      <Row>
        <Col xs="12">
         <WorkplaceSearch setListDisplay={setListDisplay}/>
        </Col>
      </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col xs="3">
            <div className="wrapper workplace-filter-wrapper">
              <WorkplaceFilter setListDisplay={setListDisplay} workPlaceList={workPlaceList}/>
            </div>
          </Col>
          <Col xs="9">
            <div className="wrapper">
              <WorkplaceMap listToDisplay={listToDisplay}/>
            </div>
          </Col>
        </Row>
      </Container>
  )
};
