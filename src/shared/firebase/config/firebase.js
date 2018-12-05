import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

const settings = {
  timestampsInSnapshots: true
};

db.settings(settings);
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { app, db, googleProvider};