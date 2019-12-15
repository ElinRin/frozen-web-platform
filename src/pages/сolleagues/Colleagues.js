import React, { useContext } from "react";
import { navigate } from "hookrouter";

import { ColleaguesSearch, Loader } from "../../components";
import { ProfileContext } from "../../app/Context";
import { UsersInfoContext } from "../../app/Context";

import "./Colleagues.css";

export const Colleagues = () => {
  const [profile] = useContext(ProfileContext);
  const [usersInfo, usersInfoDispatch] = useContext(UsersInfoContext);

  return profile.userId ? (
    <div>
      <div className="workplace-vertical-divs">
        <ColleaguesSearch />
      </div>
      <div className="users">
        {usersInfo.searchList &&
          usersInfo.searchList.map(
            (
              {
                userId,
                profileImage,
                fullName,
                age,
                position,
                department,
                email
              },
              idx
            ) => (
              <div
                key={idx}
                className="user"
                onClick={() => navigate(`/u/${userId}`)}
              >
                <img src={profileImage} alt="" className="photo" />
                <div className="user-info">
                  <div>{fullName}</div>
                  <div>{position}</div>
                  <div>{department}</div>
                  <div>{email}</div>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  ) : (
    <Loader />
  );
};
