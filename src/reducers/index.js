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
  FETCH_BIRTHDAY_USERS,
  SEARCH_USER_BY_FULL_NAME,
  CURRENT_USER,
  SEARCH_WORK_PLACE_BY_USER_ID,
  SEARCH_WORK_PLACE_BY_PROPERTIES,
  FETCH_ME
} from '../actions/types';

export const profile = (state = null, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, ...action.payload};

    case LOGOUT_USER:
      return {};

    case FETCH_ME:
      return { ...state, ...action.payload};

    case CURRENT_USER:
      return { ...state, ...action.payload};

    default:
      return state;
  }
};

export const users = (state = null, action) => {
  switch (action.type) {

    case FETCH_USER:
      return { ...state, ...action.payload};

    case CHANGE_STATUS:
      return { ...state, ...action.payload};

    case FETCH_BIRTHDAY_USERS:
      return { ...state, ...action.payload};

    case SEARCH_USER_BY_FULL_NAME:
      return { ...state, ...action.payload};

    default:
      return state;
  }
};

export const workPlace = (state = null, action) => {
  switch (action.type) {
    case FETCH_WORK_PLACE:
      return { ...state, ...action.payload};

    case FETCH_WORK_PLACE_LIST_BY_FLOOR:
      return { ...state, ...action.payload};

    case RESERVE_WORK_PLACE:
      return { ...state, ...action.payload};

    case SEARCH_WORK_PLACE_BY_USER_ID:
      return { ...state, ...action.payload};

    case SEARCH_WORK_PLACE_BY_PROPERTIES:
      return { ...state, ...action.payload};

    default:
      return state;

  }
};

export const parking = (state = null, action) => {
  switch (action.type) {
    case FETCH_PARKING:
      return { ...state, ...action.payload};

    case FETCH_PARKING_LIST_BY_FLOOR:
      return { ...state, ...action.payload};

    case RESERVE_PARKING:
      return { ...state, ...action.payload};

    default:
      return state;
  }
};