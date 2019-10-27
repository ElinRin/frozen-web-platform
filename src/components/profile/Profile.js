import React, { useContext, useEffect } from "react";
import { Col, Container, Row, Media, Table } from "reactstrap";

import photo from "../../mocks/photo_example.jpg";

import "./Profile.css";
import {UsersInfoContext} from "../../app/Context";
import {navigate} from "hookrouter";
import {fetchUser} from "../../actions/user";

export const Profile = ({ userId }) => {
  const [usersInfo, usersInfoDispatch] = useContext(UsersInfoContext);

  const returnEmpty = () => (
    <Container className="wrapper">
    </Container>
  );

  const returnProfile = profile => (
    <Container className="wrapper">
      <Row>
        <Col xs="3">
          <Media src={profile.profileImage} className="profile-photo" />
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

  const user = usersInfo[userId];
  console.log(user);
  if (typeof user == "undefined") {
    fetchUser(userId, usersInfoDispatch).catch(error => console.log(error));
    return returnEmpty();
  } else {
    return returnProfile(user);
  }
};
