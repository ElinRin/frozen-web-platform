import React, { useContext, useEffect, useState } from "react";
import { Button } from "reactstrap";
import {
  DaysOffLayout,
  BirthdaysLayout,
  NewsLayout,
  EventsLayout,
  Loader
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

  const notAvailable = { pos: 0, label: "not available", color: "secondary" };
  const available = { pos: 1, label: "available", color: "primary" };

  const [status, setStatus] = useState(notAvailable);

  useEffect(() => {
    let status;
    if (profile.status === "available") {
      status = available;
    } else {
      status = notAvailable;
    }
    setStatus(status);
  }, [profile.status]);

  return profile.userId ? (
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
            let st;
            if (status.pos === 0) {
              st = available;
            } else {
              st = notAvailable;
            }
            changeStatus(st.label, profileDispatch).catch(error =>
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
  ) : (
    <Loader />
  );
};
