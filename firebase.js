import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBSP4mX9vxaNvDeyRBk7SL_SGBUaoe_p1o",
  authDomain: "ds-snapstaff.firebaseapp.com",
  databaseURL: "https://ds-snapstaff.firebaseio.com",
  projectId: "ds-snapstaff",
  storageBucket: "ds-snapstaff.appspot.com",
  messagingSenderId: "204950920865"
};

const app = firebase.initializeApp(config);
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { app, db, googleProvider};