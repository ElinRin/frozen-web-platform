import React, { useReducer } from "react";
import { user as userInfoReducer } from "../reducers";

export const UserInfoContext = React.createContext(null);
export const Context = ({ children }) => {
  const [userInfo, userInfoDispatch] = useReducer(userInfoReducer, {});

  return (
    <UserInfoContext.Provider value={[userInfo, userInfoDispatch]}>
      {children}
    </UserInfoContext.Provider>
  );
};
