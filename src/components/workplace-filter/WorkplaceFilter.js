import React from "react";
import { Col, Container, Row, Media, Table, InputGroup, InputGroupAddon,  Input } from "reactstrap";
import { ThreeStageToggle, WorkplaceMap} from "..";


import "./WorkplaceFilter.css";

export const WorkplaceFilter = () => (
    <Container className="wrapper">
        <Row>
            <Col lg="3">
                <Row>
                    <Col>
                        <ThreeStageToggle index={1}/>
                    </Col>

                    <Col>
                        <ThreeStageToggle index={2}/>
                    </Col>

                    <Col>
                        <ThreeStageToggle index={3}/>
                    </Col>

                    <Col>
                        <ThreeStageToggle index={4}/>
                    </Col>
                </Row>
            </Col>

            <Col lg="9">
                <WorkplaceMap/>
            </Col>
        </Row>
    </Container>
);
