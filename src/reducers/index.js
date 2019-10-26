import {
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER,
  CHANGE_STATUS,
  FETCH_WORK_PLACE,
  FETCH_WORK_PLACE_LIST_BY_FLOOR,
  RESERVE_WORK_PLACE,
  FETCH_PARKING,
  FETCH_PARKING_LIST_BY_FLOOR,
  RESERVE_PARKING,
  FETCH_BIRTHDAY_USERS
} from "../actions/types";
export const user = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload;

    case LOGOUT_USER:
      return action.payload;

    case FETCH_USER:
      return action.payload;

    case CHANGE_STATUS:
      return action.payload;

    case FETCH_BIRTHDAY_USERS:
      return action.payload;
    default:
      return;
  }
};

export const workPlace = (state = null, action) => {
  switch (action.type) {
    case FETCH_WORK_PLACE:
      return action.payload;

    case FETCH_WORK_PLACE_LIST_BY_FLOOR:
      return action.payload;

    case RESERVE_WORK_PLACE:
      return action.payload;
    default:
      return;
  }
};

export const parking = (state = null, action) => {
  switch (action.type) {
    case FETCH_PARKING:
      return action.payload;

    case FETCH_PARKING_LIST_BY_FLOOR:
      return action.payload;

    case RESERVE_PARKING:
      return action.payload;
    default:
      return;
  }
};
