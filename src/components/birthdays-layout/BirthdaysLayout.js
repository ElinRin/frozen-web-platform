import React from "react";

import photo from "../../mocks/photo_example.jpg"

import "./BirthdaysLayout.css"

const items = [
  {'photoUrl': photo, 'userName': 'Nikita', 'age': 23},
  {'photoUrl': photo, 'userName': 'Elina', 'age': 25},
  {'photoUrl': photo, 'userName': 'Katya', 'age': 22},
  {'photoUrl': photo, 'userName': 'Julia', 'age': 28}
];

export const BirthdaysLayout = () => (
  <div>
    <h1 className="birthdays-header">Happy birthday!</h1>
    <div className="birthdays-wrapper">
      {items.map(
        ({ photoUrl, userName, age }) => (
          <div className="birthdays-card">
            <img src={photoUrl} className="birthdays-photo-small"/>
            <div>{userName}</div>
            <div>{age} years</div>
          </div>
        )
      )}
    </div>
  </div>
);
