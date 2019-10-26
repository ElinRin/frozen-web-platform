import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER,
  CHANGE_STATUS,
  FETCH_BIRTHDAY_USERS
} from "./types";
import { firebaseTools } from "../utils/firebase";

export const loginUser = async (user, dispatch) => {
  await dispatch({
    type: LOGIN_USER,
    payload: firebaseTools.loginUser(user)
  });
};

export const logoutUser = async dispatch =>
  await dispatch({
    type: LOGOUT_USER,
    payload: firebaseTools.logoutUser()
  });

export const fetchUser = async (userId, dispatch) =>
  await dispatch({
    type: FETCH_USER,
    payload: firebaseTools.fetchUser(userId)
  });

export const changeStatus = async (newStatus, dispatch) =>
  await dispatch({
    type: CHANGE_STATUS,
    payload: firebaseTools.changeStatus(newStatus)
  });

export const fetchBirthDayUsers = async dispatch =>
  await dispatch({
    type: FETCH_BIRTHDAY_USERS,
    payload: firebaseTools.fetchBirthDayUsers()
  });
