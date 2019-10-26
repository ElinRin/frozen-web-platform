import React, { useContext } from "react";
import { Col, Container, Row, Media, Table } from "reactstrap";

import photo from "../../mocks/photo_example.jpg";

import "./Profile.css";
import {ProfileContext} from "../../app/Context";

export const Profile = () => {
  const [profile, profileDispatch] = useContext(ProfileContext);

  return (
    <Container className="wrapper">
      <Row>
        <Col xs="3">
          <Media src={photo} className="profile-photo" />
        </Col>
        <Col xs="8" className="header">
          <h1>{profile.fullName}</h1>
          <h2>{profile.status}</h2>
        </Col>
      </Row>
      <Row className="info">
        <Col>
          <Table>
            <tbody>
            <tr>
              <td>Position</td>
              <td>{profile.position}</td>
            </tr>
            <tr>
              <td>Department</td>
              <td>{profile.department}</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>{profile.location}</td>
            </tr>
            <tr>
              <td>Employment status</td>
              <td>{profile.employmentStatus}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{profile.mobilePhone}</td>
            </tr>
            <tr>
              <td>Work additional phone</td>
              <td>{profile.workAdditionalPhone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <td>Birth date</td>
              <td>{profile.birthDate}</td>
            </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
