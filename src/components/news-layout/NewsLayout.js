import React from "react";

import "./NewsLayout.css";

const items = [
  {
    author: "Nikita",
    time: "2019-10-20 12:23:11",
    text: "All phones don't work today because of technical issues."
  },
  {
    author: "Elina",
    time: "2019-10-20 12:14:19",
    text:
      "Let's go and play Mafia today at 12:00. Write me :) We are looking for 2-4 people"
  },
  {
    author: "Elina",
    time: "2019-10-20 12:14:19",
    text:
      "Let's go and play Mafia today at 12:00. Write me :) We are looking for 2-4 people"
  },
  {
    author: "Elina",
    time: "2019-10-20 12:14:19",
    text:
      "Let's go and play Mafia today at 12:00. Write me :) We are looking for 2-4 people"
  },
  {
    author: "Elina",
    time: "2019-10-20 12:14:19",
    text:
      "Let's go and play Mafia today at 12:00. Write me :) We are looking for 2-4 people"
  }
];

export const NewsLayout = () => (
  <div className="chat-wrapper">
    <h2 className="birthdays-header">Announcements</h2>
    {items.map(({ author, time, text }, idx) => (
      <div key={idx} className="chat-card">
        <div className="chat-message-header">
          <div>{author}</div>
          <div>{time}</div>
        </div>
        <div>{text}</div>
      </div>
    ))}
  </div>
);
