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
    payload: { userId: firebaseTools.currentUser() }
  });
};

export const logoutUser = async dispatch => {
  await firebaseTools.logoutUser();
  await dispatch({
    type: LOGOUT_USER
  });
};

export const fetchMe = async dispatch => {
  await firebaseTools.fetchMe().then(profile =>
    dispatch({
      type: FETCH_ME,
      payload: profile
    })
  );
};

export const currentUser = async dispatch => {
  await dispatch({
    type: CURRENT_USER,
    payload: { userId: firebaseTools.currentUser() }
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

export const searchUserByFullName = async (fullName, dispatch) => {
  firebaseTools.searchUserByFullName(fullName).then(userList => {
    console.log(userList);

    dispatch({
      type: SEARCH_USER_BY_FULL_NAME,
      payload: { fullNameSearch: userList[0] }
    });
  });
};

// export const fetchBirthDayUsers = async dispatch =>
//   await dispatch({
//     type: FETCH_BIRTHDAY_USERS,
//     payload: firebaseTools.fetchBirthDayUsers()
//   });
