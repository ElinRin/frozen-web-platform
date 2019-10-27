import React, { useReducer } from "react";
import {
  profile as profileReducer,
  users as usersInfoReducer,
  workPlace as workPlaceInfoReducer,
  parking as parkingInfoReducer
} from "../reducers";

export const ProfileContext = React.createContext(null);
export const UsersInfoContext = React.createContext(null);
export const WorkPlaceInfoContext = React.createContext(null);
export const ParkingInfoContext = React.createContext(null);

export const Context = ({ children }) => {
  const [profile, profileDispatch] = useReducer(profileReducer, {});
  const [usersInfo, usersInfoDispatch] = useReducer(usersInfoReducer, {});
  const [workPlaceInfo, workPlaceInfoDispatch] = useReducer(
    workPlaceInfoReducer,
    {}
  );
  const [parkingInfo, parkingInfoDispatch] = useReducer(parkingInfoReducer, {});

  return (
    <ProfileContext.Provider value={[profile, profileDispatch]}>
      <UsersInfoContext.Provider value={[usersInfo, usersInfoDispatch]}>
        <WorkPlaceInfoContext.Provider
          value={[workPlaceInfo, workPlaceInfoDispatch]}
        >
          <ParkingInfoContext.Provider
            value={[parkingInfo, parkingInfoDispatch]}
          >
            {children}
          </ParkingInfoContext.Provider>
        </WorkPlaceInfoContext.Provider>
      </UsersInfoContext.Provider>
    </ProfileContext.Provider>
  );
};
