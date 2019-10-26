import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER,
  CHANGE_STATUS,
  FETCH_BIRTHDAY_USERS,
  SEARCH_USER_BY_FULL_NAME,
  CURRENT_USER,
  FETCH_ME
} from "./types";
import { firebaseTools } from "../utils/firebase";


export const loginUser = async (user, dispatch) => {
  await firebaseTools.loginUser(user);

  await dispatch({
    type: LOGIN_USER,
    payload: { userId : firebaseTools.currentUser() }
  })
};


export const logoutUser = async dispatch => {
  await firebaseTools.logoutUser();
  await dispatch({
    type: LOGOUT_USER,
    payload: {}
  });
};

export const fetchMe = async dispatch =>
  await firebaseTools.fetchMe().then(profile =>
    dispatch({
      type: FETCH_ME,
      payload: profile
    }));

export const currentUser = async dispatch => {
  const userId = firebaseTools.currentUser();
  await dispatch({
    type: CURRENT_USER,
    payload: {userId}
  })
};

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


