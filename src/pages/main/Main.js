import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Media, Button } from "reactstrap";
import { DaysOffLayout } from "../../components/daysoff-layout/DaysOffLayout";
import { BirthdaysLayout } from "../../components/birthdays-layout/BirthdaysLayout";
import { NewsLayout } from "../../components/news-layout/NewsLayout";

import photo from "../../mocks/photo_example.jpg";
import "./Main.css";
import { changeStatus, fetchMe } from "../../actions/user";
import { ProfileContext } from "../../app/Context";

export const Main = () => {
  const [profile, profileDispatch] = useContext(ProfileContext);

  useEffect(() => {
    async function fetchData() {
      await fetchMe(profileDispatch);
    }
    fetchData();
  }, [profile.userId, profileDispatch]);

  const atHome = { pos: 0, label: "At home", color: "secondary" };
  const onWork = { pos: 1, label: "On work", color: "primary" };
  let initialStatus;
  if (profile.status === "On work") {
    initialStatus = onWork;
  } else {
    initialStatus = atHome;
  }
  const [status, setStatus] = useState(initialStatus);

  return (
    <Container className="wrapper-large">
      <Row>
        <Col xs="2" className="main-up-left-block main-left-block">
          <Media src={profile.profileImage} className="profile-photo-small" />
        </Col>
        <Col xs="2" className="main-up-right-block main-left-block">
          <h3>{profile.fullName}</h3>
          <Button
            color={status.color}
            className="profile-button"
            onClick={() => {
              if (status.pos === 0) {
                setStatus(onWork);
              } else {
                setStatus(atHome);
              }
              changeStatus(status.label, profileDispatch).catch(error =>
                console.log(error)
              );
            }}
          >
            {status.label}
          </Button>
        </Col>
        <Col xs="8">
          <BirthdaysLayout />
        </Col>
      </Row>
      <Row>
        <Col xs="4" className="main-left-block main-down-block">
          <div className="wrapper-days-off">
            <DaysOffLayout />
          </div>
        </Col>
        <Col xs="8">
          <NewsLayout />
        </Col>
      </Row>
    </Container>
  );
};
