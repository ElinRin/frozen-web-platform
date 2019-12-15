import React from "react";

import "./EventsLayout.css";

const items = [
  {
    event: "Every year vacation",
    time: "2019-11-20 - 2019-12-02",
    text: "Spain"
  },
  {
    event: "Leave without pay",
    time: "2019-12-12",
    text: "I have an exam on this day"
  },
  {
    event: "Sick leave",
    time: "2019-09-20",
    text: "I had a headache"
  },
  {
    event: "Remote work",
    time: "2019-10-10",
    text: ""
  },
  {
    event: "Conference",
    time: "2019-10-14",
    text: "HolyJS"
  }
];

export const EventsLayout = () => (
  <div className="chat-wrapper">
    <h2 className="birthdays-header">Events</h2>
    {items.map(({ event, time, text }, idx) => (
      <div key={idx} className="chat-card">
        <div className="chat-message-header">
          <div>{event}</div>
          <div>{time}</div>
        </div>
        <div>{text}</div>
      </div>
    ))}
  </div>
);
