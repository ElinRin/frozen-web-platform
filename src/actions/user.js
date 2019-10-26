import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER,
  CHANGE_STATUS,
  FETCH_BIRTHDAY_USERS,
  SEARCH_USER_BY_FULL_NAME,
  CURRENT_USER
} from "./types";
import firebase from "firebase";
import { firebaseTools } from "../utils/firebase";

export const loginUser = async (user, dispatch) =>
  await firebaseTools.loginUser(user).then(() => {
    const uid = firebase.auth().currentUser.uid;

    return dispatch({
      type: LOGIN_USER,
      payload: { id: uid }
    });
  });

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

export const searchUserByFullName = async (fullName, dispatch) =>
  await dispatch({
    type: SEARCH_USER_BY_FULL_NAME,
    payload: firebaseTools.searchUserByFullName(fullName)
  });

export const currentUser = async dispatch =>
  await dispatch({
    type: CURRENT_USER,
    payload: firebaseTools.currentUser()
  });
