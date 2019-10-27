import React from "react";

import photo from "../../mocks/photo_example.jpg";

import "./BirthdaysLayout.css";

const items = [
  { photoUrl: photo, userName: "Nikita", age: 23 },
  { photoUrl: photo, userName: "Elina", age: 25 },
  { photoUrl: photo, userName: "Katya", age: 22 },
  { photoUrl: photo, userName: "Julia", age: 28 }
];

export const BirthdaysLayout = () => (
  <div className="birthdays-wrapper">
    <h2 className="birthdays-header">Happy birthday!</h2>
    <div className="birthdays-body">
      {items.map(({ photoUrl, userName, age }, idx) => (
        <div key={idx} className="birthdays-card">
          <img src={photoUrl} alt="" className="birthdays-photo-small" />
          <div>{userName}</div>
          <div>{age} years</div>
        </div>
      ))}
    </div>
  </div>
);
