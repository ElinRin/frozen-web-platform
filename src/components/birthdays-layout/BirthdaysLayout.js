import React, { useEffect, useState } from "react";

import "./BirthdaysLayout.css";
import { firebaseTools } from "../../utils/firebase";
import { navigate, usePath } from "hookrouter";

export const BirthdaysLayout = () => {
  const today = new Date();
  const [birthday, setBirthday] = useState([]);
  useEffect(() => {
    firebaseTools
      .allUsers()
      .then(
        userList =>
          userList &&
          userList.length > 0 &&
          userList
            .map(a => {
              a.birthDate = new Date(a.birthDate);
              a.age = today.getFullYear() - a.birthDate.getFullYear();
              return a;
            })
            .filter(a => {
              return (
                today.getDate() === a.birthDate.getDate() &&
                today.getMonth() === a.birthDate.getMonth()
              );
            })
            .sort((a, b) => a.age - b.age)
      )
      .then(a => setBirthday(a));
  }, [today]);

  return (
    <div className="birthdays-wrapper">
      <h2 className="birthdays-header">Happy birthday!</h2>
      <div className="birthdays-body">
        {birthday &&
          birthday.length > 0 &&
          birthday.map(({ userId, profileImage, fullName, age }, idx) => (
            <div
              key={idx}
              className="birthdays-card"
              onClick={() => navigate(`/u/${userId}`)}
            >
              <img
                src={profileImage}
                alt=""
                className="birthdays-photo-small"
              />
              <div>{fullName}</div>
              <div>{age} years</div>
            </div>
          ))}
      </div>
    </div>
  );
};
