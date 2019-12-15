import firebase from "firebase";
import { FIREBASE_CONFIG } from "../config";

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseFS = firebaseApp.firestore();

const usersFS = firebaseFS.collection("users");
const workPlacesFS = firebaseFS.collection("workPlaces");
const parkingFS = firebaseFS.collection("parking");
const daysOffFS = firebaseFS.collection("daysOff");
const eventsFS = firebaseFS.collection("events");


export const firebaseTools = {
  loginUser: user =>
    firebaseAuth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(userInfo => userInfo)
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  loginUserByToken: token =>
    firebaseAuth
      .signInWithCustomToken(token)
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
    const userId = firebaseAuth.currentUser && firebaseAuth.currentUser.uid;
    if (userId) {
      return usersFS
        .doc(userId)
        .get()
        .then(profile => {
          return { userId, ...profile.data() };
        })
        .catch(error => ({
          errorCode: error.code,
          errorMessage: error.message
        }));
    } else
      return Promise.reject({
        errorCode: 404,
        errorMessage: "current user not found"
      });
  },

  currentUser: () => firebaseAuth.currentUser,

  currentUserId: () => firebaseAuth.currentUser && firebaseAuth.currentUser.uid,

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
    const userId = firebaseAuth.currentUser && firebaseAuth.currentUser.uid;
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
      .then(userList => userList.docs.map(a => a.data()))
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  fetchWorkPlace: workPlaceId =>
    workPlacesFS
      .doc(workPlaceId)
      .get()
      .then(workPlaceInfo => workPlaceInfo.data())
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  fetchWorkPlaceListByFloor: floor =>
    workPlacesFS
      .where("floor", "==", floor)
      .get()
      .then(workPlaceList =>
        workPlaceList.docs.map(a => ({ id: a.id, ...a.data() }))
      )
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  reserveWorkPlace: workPlaceId => {
    const userId = firebaseAuth.currentUser && firebaseAuth.currentUser.uid;
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

  searchWorkPlaceByUserId: userId =>
    workPlacesFS
      .where("userId", "==", userId)
      .get()
      .then(userList => userList.docs.map(a => a.data()))
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

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

  fetchParkingList: () =>
    parkingFS
      .orderBy("num")
      .get()
      .then(parkingList => {
        let data = parkingList.docs.map(a => {
          let res = a.data();
          res.id = a.id;
          return res;
        });
        return data;
      })
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      })),

  reserveParking: parkingId => {
    const userId = firebaseAuth.currentUser && firebaseAuth.currentUser.uid;
    parkingFS
      .doc(parkingId)
      .update({
        userId: userId
      })
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  },

  daysOff: () => {
    const userId = firebaseAuth.currentUser && firebaseAuth.currentUser.uid;
    return daysOffFS
      .doc(userId)
      .get()
      .then(profile => {
        return { userId, ...profile.data() };
      })
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  },

  events: () => {
    const userId = firebaseAuth.currentUser && firebaseAuth.currentUser.uid;
    return eventsFS
      .where("userId", "==", userId)
      .get()
      .then(events => ({
        userId: userId,
        events: events.docs.map(a => a.data())}))
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  },

  dayOffUpdate: (label, number) => {
    const userId = firebaseAuth.currentUser && firebaseAuth.currentUser.uid;
    return daysOffFS
      .doc(userId)
      .update({
        [label]: number
      })
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  },

  newEvent: event => {
    const userId = firebaseAuth.currentUser && firebaseAuth.currentUser.uid;
    return eventsFS
      .add({
        userId: userId,
        ...event
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
