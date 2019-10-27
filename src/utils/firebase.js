import firebase from "firebase";
import { FIREBASE_CONFIG } from "../config";

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseFS = firebaseApp.firestore();

const usersFS = firebaseFS.collection("users");
const workPlacesFS = firebaseFS.collection("workPlaces");
const parkingFS = firebaseFS.collection("parking");

export const firebaseTools = {
  loginUser: user =>
    firebaseAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(userInfo => userInfo)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  logoutUser: () =>
    firebaseAuth.signOut().then(() => ({
      success: 1,
      message: "logout"
    })),

  fetchMe: () => {
    const userId = firebaseAuth.currentUser.uid;
    return usersFS
      .doc(userId)
      .get()
      .then(profile => ({ userId, ...profile.data() }))
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  },

  currentUser: () => firebaseAuth.currentUser && firebaseAuth.currentUser.uid,

  fetchUser: userId =>
    usersFS
      .doc(userId)
      .get()
      .then(userInfo => userInfo)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  changeStatus: newStatus => {
    const userId = firebaseAuth.currentUser.uid;
    usersFS
      .doc(userId)
      .update({
        status: newStatus
      })
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  },

  searchUserByFullName: fullName =>
    usersFS
      .where("fullName", "==", fullName)
      .get()
      .then(userList => userList)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  fetchWorkPlace: workPlaceId =>
    workPlacesFS
      .doc(workPlaceId)
      .get()
      .then(workPlaceInfo => workPlaceInfo)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  fetchWorkPlaceListByFloor: floor =>
    workPlacesFS
      .where("floor", "==", floor)
      .get()
      .then(workPlaceList => workPlaceList)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  reserveWorkPlace: workPlaceId => {
    const userId = firebaseAuth.currentUser.uid;
    workPlacesFS
      .doc(workPlaceId)
      .update({
        userId: userId
      })
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  },

  searchWorkPlaceByUserId: userId => {
    const workPlaceList = workPlacesFS.where("userId", "==", userId).get();
    return workPlaceList[0];
  },

  searchWorkPlaceByProperties: properties => {
    let wp = workPlacesFS;
    for (let key in properties) {
      wp = wp.where(key, "==", properties[key]);
    }
    return wp
      .get()
      .then(workPlaceList => workPlaceList)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  },

  fetchParking: parkingId =>
    parkingFS
      .doc(parkingId)
      .get()
      .then(parkingInfo => parkingInfo)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  fetchParkingListByFloor: floor =>
    parkingFS
      .where("floor", "==", floor)
      .get()
      .then(parkingList => parkingList)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  reserveParking: parkingId => {
    const userId = firebaseAuth.currentUser.uid;
    parkingFS
      .doc(parkingId)
      .update({
        userId: userId
      })
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  }

  // fetchBirthDayUsers: () => {
  //   const userList = [];
  //   return userList;
  // }
};
