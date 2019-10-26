import firebase from 'firebase';
import { FIREBASE_CONFIG } from '../config';

export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseFS = firebaseApp.firestore();

export const firebaseTools = {

    loginUser: user => firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
        .then(userInfo => userInfo)
        .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message,
        })),

    logoutUser: () => firebaseAuth.signOut().then(() => ({
        success: 1,
        message: 'logout',
    })),

    fetchUser: userId => firebaseFS.collection("users").doc(userId).get()
        .then(userInfo => userInfo)
        .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message,
        })),

    changeStatus: newStatus => {
        const userId = firebaseAuth.currentUser.uid;
        firebaseFS.collection("users").doc(userId).update({
            status: newStatus
        })
            .catch(error => ({
                errorCode: error.code,
                errorMessage: error.message,
            }));
    },

    fetchWorkPlace: workPlaceId => firebaseFS.collection("workPlaces").doc(workPlaceId).get()
        .then(workPlaceInfo => workPlaceInfo)
        .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message,
        })),

    fetchWorkPlaceListByFloor: floor => firebaseFS.collection("workPlaces").where("floor", "==", floor).get()
        .then(workPlaceList => workPlaceList)
        .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message,
        })),

    reserveWorkPlace: workPlaceId => {
        const userId = firebaseAuth.currentUser.uid;
        firebaseFS.collection("workPlaces").doc(workPlaceId).update({
            userId: userId
        })
            .catch(error => ({
                errorCode: error.code,
                errorMessage: error.message,
            }));
    },

    fetchParking: parkingId => firebaseFS.collection("parking").doc(parkingId).get()
        .then(parkingInfo => parkingInfo)
        .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message,
        })),

    fetchParkingListByFloor: floor => firebaseFS.collection("parking").where("floor", "==", floor).get()
        .then(parkingList => parkingList)
        .catch(error => ({
            errorCode: error.code,
            errorMessage: error.message,
        })),

    reserveParking: parkingId => {
        const userId = firebaseAuth.currentUser.uid;
        firebaseFS.collection("parking").doc(parkingId).update({
            userId: userId
        })
            .catch(error => ({
                errorCode: error.code,
                errorMessage: error.message,
            }));
    },

    fetchBirthDayUsers: () => {
        const userList = [];
        return userList
    }
};