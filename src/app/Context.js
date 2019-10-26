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
      <WorkPlaceInfoContext.Provider value={[workPlaceInfo, workPlaceInfoDispatch]}>
        <ParkingInfoContext.Provider value={[parkingInfo, parkingInfoDispatch]}>
          {children}
        </ParkingInfoContext.Provider>
      </WorkPlaceInfoContext.Provider>
    </UserInfoContext.Provider>
  );
};
