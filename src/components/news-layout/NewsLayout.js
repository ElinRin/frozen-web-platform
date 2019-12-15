import React from "react";

import "./NewsLayout.css";

const items = [
  {
    type: "Platform",
    time: "2019-10-20 12:23:11",
    text: "All phones don't work today because of technical issues."
  },
  {
    type: "Office",
    time: "2020-02-02 12:14:19",
    text:
      "Let's go and play Mafia today at 12:00. Write me :) We are looking for 2-4 people"
  },
  {
    type: "Office",
    time: "2020-01-20 12:00",
    text: "Spring cleaning today"
  },
  {
    type: "Holiday",
    time: "2019-12-31 - 2020-01-07",
    text: "New Year's holiday"
  },
  {
    type: "Holiday",
    time: "2019-12-31 00:00",
    text: "New Year"
  },
  {
    type: "Holiday",
    time: "2019-12-25 00:00",
    text: "Christmas"
  },
  {
    type: "Office",
    time: "2019-12-27 19:00",
    text: "Fan Friday"
  }
];

export const NewsLayout = () => (
  <div className="chat-wrapper">
    <h2 className="birthdays-header">Announcements</h2>
    {items.map(({ type, time, text }, idx) => (
      <div key={idx} className="chat-card">
        <div className="chat-message-header">
          <div>{type}</div>
          <div>{time}</div>
        </div>
        <div>{text}</div>
      </div>
    ))}
  </div>
);
