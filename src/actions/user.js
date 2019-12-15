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
    payload: { userId: firebaseTools.currentUserId() }
  });
};

export const loginUserByToken = async (token, dispatch) => {
  await firebaseTools.loginUserByToken(token);
  await dispatch({
    type: LOGIN_USER,
    payload: { userId: firebaseTools.currentUserId() }
  });

  return firebaseTools.currentUserId();
};

export const logoutUser = async dispatch => {
  await firebaseTools.logoutUser();
  await dispatch({
    type: LOGOUT_USER
  });
};

export const fetchMe = async dispatch => {
  await firebaseTools
    .fetchMe()
    .then(profile =>
      dispatch({
        type: FETCH_ME,
        payload: profile
      })
    )
    .catch(() =>
      dispatch({
        type: LOGOUT_USER
      })
    );
};

export const currentUser = async dispatch => {
  await dispatch({
    type: CURRENT_USER,
    payload: { userId: firebaseTools.currentUserId() }
  });
};

export const fetchUser = async (userId, dispatch) => {
  await firebaseTools.fetchUser(userId).then(userInfo => {
    return dispatch({
      type: FETCH_USER,
      payload: { [userId]: userInfo.data() }
    });
  });
};

export const changeStatus = async (newStatus, dispatch) => {
  await firebaseTools.changeStatus(newStatus);
  await fetchMe(dispatch);
};

export const searchUsersByName = async (name, dispatch) => {
  firebaseTools.searchUserByFullName(name).then(userList => {
    dispatch({
      type: SEARCH_USER_BY_FULL_NAME,
      payload: { searchList: userList }
    });
  });
};

// export const fetchBirthDayUsers = async dispatch =>
//   await dispatch({
//     type: FETCH_BIRTHDAY_USERS,
//     payload: firebaseTools.fetchBirthDayUsers()
//   });
