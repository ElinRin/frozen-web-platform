import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Media, Table } from "reactstrap";

import "./Profile.css";
import { UsersInfoContext } from "../../app/Context";
import { fetchUser } from "../../actions/user";

export const Profile = ({ userId }) => {
  const [usersInfo, usersInfoDispatch] = useContext(UsersInfoContext);
  const [user, setUser] = useState(usersInfo[userId]);

  useEffect(() => {
    if (typeof user === "undefined") {
      const newUser = usersInfo[userId];
      if (typeof newUser !== "undefined") {
        setUser(usersInfo[userId]);
      }
    }
  }, [user, userId, usersInfo]);

  const returnEmpty = () => <Container className="wrapper wrapper-margin"></Container>;

  const returnProfile = profile => (
    <Container className="profile-wrapper">
      <div className="main-info">
        <Media src={profile.profileImage} className="profile-photo" />

        <div className="header">
          <h1>{profile.fullName}</h1>
          <h2>{profile.status}</h2>
        </div>
      </div>
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


  if (typeof user === "undefined") {
    fetchUser(userId, usersInfoDispatch).catch(error => console.log(error));
    return returnEmpty();
  } else {
    return returnProfile(user);
  }
};
