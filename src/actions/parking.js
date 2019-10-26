import {
  FETCH_PARKING,
  FETCH_PARKING_LIST_BY_FLOOR,
  RESERVE_PARKING
} from './types';
import {firebaseTools} from "../utils/firebase";

export const fetchParking = async (parkingId, dispatch) =>
  await dispatch({
    type: FETCH_PARKING,
    payload: firebaseTools.fetchParking(parkingId)
  });

export const fetchParkingListByFloor = async (floor, dispatch) =>
  await dispatch({
    type: FETCH_PARKING_LIST_BY_FLOOR,
    payload: firebaseTools.fetchParkingListByFloor(floor)
  });

export const reserveParking = async (parkingId, dispatch) =>
  await dispatch({
    type: RESERVE_PARKING,
    payload: firebaseTools.reserveParking(parkingId)
  });