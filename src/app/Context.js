import React, { useReducer } from "react";
import {
  user as userInfoReducer,
  workPlace as workPlaceInfoReducer,
  parking as parkingInfoReducer
} from "../reducers";

export const UserInfoContext = React.createContext(null);
export const WorkPlaceInfoContext = React.createContext(null);
export const ParkingInfoContext = React.createContext(null);

export const Context = ({ children }) => {
  const [userInfo, userInfoDispatch] = useReducer(userInfoReducer, {});
  const [workPlaceInfo, workPlaceInfoDispatch] = useReducer(workPlaceInfoReducer, {});
  const [parkingInfo, parkingInfoDispatch] = useReducer(parkingInfoReducer, {});

  return (
    <UserInfoContext.Provider value={[userInfo, userInfoDispatch]}>
      <WorkPlaceInfoContext value={[workPlaceInfo, workPlaceInfoDispatch]}>
        <ParkingInfoContext value={[parkingInfo, parkingInfoDispatch]}>
          {children}
        </ParkingInfoContext>
      </WorkPlaceInfoContext>
    </UserInfoContext.Provider>
  );
};
