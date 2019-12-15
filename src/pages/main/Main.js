import React, { useContext, useEffect, useState } from "react";
import { Button } from "reactstrap";
import {
  DaysOffLayout,
  BirthdaysLayout,
  NewsLayout,
  EventsLayout
} from "../../components";
import { changeStatus, fetchMe } from "../../actions/user";
import { ProfileContext } from "../../app/Context";
import "./Main.css";

export const Main = () => {
  const [profile, profileDispatch] = useContext(ProfileContext);

  useEffect(() => {
    async function fetchData() {
      await fetchMe(profileDispatch);
    }
    fetchData();
  }, [profile.userId, profileDispatch]);

  const atHome = { pos: 0, label: "not available", color: "secondary" };
  const onWork = { pos: 1, label: "available", color: "primary" };
  let initialStatus;
  if (profile.status === "On work") {
    initialStatus = onWork;
  } else {
    initialStatus = atHome;
  }
  const [status, setStatus] = useState(initialStatus);

  return (
    <div className="main-horizontal-wrapper">
      <div className="main-left-column">
        <div className="main-img-container">
          <img
            src={profile.profileImage}
            className="profile-photo-small"
            alt=""
          />
          <h3>{profile.fullName}</h3>
        </div>
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
        <DaysOffLayout />
        <EventsLayout />
      </div>
      <div className="main-right-column">
        <BirthdaysLayout />
        <NewsLayout />
      </div>
    </div>
  );
};
