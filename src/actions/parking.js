import {
  FETCH_PARKING,
  FETCH_PARKING_LIST,
  RESERVE_PARKING
} from './types';
import {firebaseTools} from "../utils/firebase";

export const fetchParking = async (parkingId, dispatch) =>
  await dispatch({
    type: FETCH_PARKING,
    payload: firebaseTools.fetchParking(parkingId)
  });

export const fetchParkingList = async (dispatch) =>
  await dispatch({
    type: FETCH_PARKING_LIST,
    payload: firebaseTools.fetchParkingList()
  });

export const reserveParking = async (parkingId, dispatch) =>
  await dispatch({
    type: RESERVE_PARKING,
    payload: firebaseTools.reserveParking(parkingId)
  });
