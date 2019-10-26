import {
    FETCH_WORK_PLACE,
    FETCH_WORK_PLACE_LIST_BY_FLOOR,
    RESERVE_WORK_PLACE
} from './types';
import { firebaseTools } from "./firebase";

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