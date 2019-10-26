import {
  FETCH_WORK_PLACE,
  FETCH_WORK_PLACE_LIST_BY_FLOOR,
  RESERVE_WORK_PLACE,
  SEARCH_WORK_PLACE_BY_PROPERTIES,
  SEARCH_WORK_PLACE_BY_USER_ID
} from './types';
import {firebaseTools} from "../utils/firebase";

export const fetchWorkPlace = async (workPlaceId, dispatch) =>
  await dispatch({
    type: FETCH_WORK_PLACE,
    payload: firebaseTools.fetchWorkPlace(workPlaceId)
  });

export const fetchWorkPlaceListByFloor = async (floor, dispatch) =>
  await dispatch({
    type: FETCH_WORK_PLACE_LIST_BY_FLOOR,
    payload: firebaseTools.fetchWorkPlaceListByFloor(floor)
  });

export const reserveWorkPlace = async (workPlaceId, dispatch) =>
  await dispatch({
    type: RESERVE_WORK_PLACE,
    payload: firebaseTools.reserveWorkPlace(workPlaceId)
  });

export const searchWorkPlaceByUserId = async (userId, dispatch) =>
  await dispatch({
    type: SEARCH_WORK_PLACE_BY_USER_ID,
    payload: firebaseTools.searchWorkPlaceByUserId(userId)
  });

export const searchWorkPlaceByProperties = async (properties, dispatch) =>
  await dispatch({
    type: SEARCH_WORK_PLACE_BY_PROPERTIES,
    payload: firebaseTools.searchWorkPlaceByProperties(properties)
  });