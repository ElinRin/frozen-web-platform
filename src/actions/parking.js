import {
    FETCH_PARKING,
    FETCH_PARKING_LIST_BY_FLOOR,
    RESERVE_PARKING
} from './types';
import { firebaseTools } from "./firebase";

export const fetchParking = parkingId => async dispatch =>
    dispatch({
        type: FETCH_PARKING,
        payload: firebaseTools.fetchParking(parkingId)
    });

export const fetchParkingListByFloor = floor => async dispatch =>
    dispatch({
        type: FETCH_PARKING_LIST_BY_FLOOR,
        payload: firebaseTools.fetchParkingListByFloor(floor)
    });

export const reserveParking = parkingId => async dispatch =>
    dispatch({
        type: RESERVE_PARKING,
        payload: firebaseTools.reserveParking(parkingId)
    });