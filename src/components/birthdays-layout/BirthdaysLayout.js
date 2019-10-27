import React from "react";

import photo from "../../mocks/photo_example.jpg";
import photo1 from "../../mocks/example1.jpeg";
import photo2 from "../../mocks/example2.jpeg";
import photo3 from "../../mocks/example3.png";
import photo4 from "../../mocks/example4.jpeg";

import "./BirthdaysLayout.css";

const items = [
  { photoUrl: photo, userName: "Nikita", age: 23 },
  { photoUrl: photo1, userName: "Elina", age: 25 },
  { photoUrl: photo2, userName: "Alex", age: 22 },
  { photoUrl: photo3, userName: "Julia", age: 28 },
  { photoUrl: photo4, userName: "Anna", age: 77 }
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
