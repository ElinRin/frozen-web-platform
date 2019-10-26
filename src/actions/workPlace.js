import {
  FETCH_WORK_PLACE,
  FETCH_WORK_PLACE_LIST_BY_FLOOR,
  RESERVE_WORK_PLACE, SEARCH_WORK_PLACE_BY_PROPERTIES, SEARCH_WORK_PLACE_BY_USER_ID
} from './types';
import {firebaseTools} from "../utils/firebase";

export const fetchWorkPlace = workPlaceId => async dispatch =>
  dispatch({
    type: FETCH_WORK_PLACE,
    payload: firebaseTools.fetchWorkPlace(workPlaceId)
  });

export const fetchWorkPlaceListByFloor = floor => async dispatch =>
  dispatch({
    type: FETCH_WORK_PLACE_LIST_BY_FLOOR,
    payload: firebaseTools.fetchWorkPlaceListByFloor(floor)
  });

export const reserveWorkPlace = workPlaceId => async dispatch =>
  dispatch({
    type: RESERVE_WORK_PLACE,
    payload: firebaseTools.reserveWorkPlace(workPlaceId)
  });

export const searchWorkPlaceByUserId = userId => async dispatch =>
  dispatch({
    type: SEARCH_WORK_PLACE_BY_USER_ID,
    payload: firebaseTools.searchWorkPlaceByUserId(userId)
  });

export const searchWorkPlaceByProperties = properties => async dispatch =>
  dispatch({
    type: SEARCH_WORK_PLACE_BY_PROPERTIES,
    payload: firebaseTools.searchWorkPlaceByProperties(properties)
  });