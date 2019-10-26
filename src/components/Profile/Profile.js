import React from 'react';
import {Col, Container, Row, Media, Table } from "reactstrap";

import photo from './photo_example.jpg';

import './Profile.css'

export const Profile = () => (
    <Container className='wrapper'>
        <Row>
            <Col xs="3">
                <Media src={photo} className='profile-photo' />
            </Col>
            <Col xs="8" className='header'>
                <h1>Everett Soto</h1>
                <h2>On work</h2>
            </Col>
        </Row>
        <Row className='info'>
            <Col>
                <Table>
                    <tbody>
                    <tr>
                        <td>Position</td>
                        <td>Developer</td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>Department of innovation and high technology</td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>Hungary</td>
                    </tr>
                    <tr>
                        <td>Employment status</td>
                        <td>Full-time</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>+36 (548)-031-5215</td>
                    </tr>
                    <tr>
                        <td>Work additional phone</td>
                        <td>5478</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>everett.soto@example.com</td>
                    </tr>
                    <tr>
                        <td>Birth date</td>
                        <td>06/04/1979</td>
                    </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
);