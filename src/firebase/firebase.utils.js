import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAsdgzbcPaCYo_8o1F7GQ3dRTYg0iO-GQ4",
  authDomain: "crwn-db-49fee.firebaseapp.com",
  databaseURL: "https://crwn-db-49fee.firebaseio.com",
  projectId: "crwn-db-49fee",
  storageBucket: "crwn-db-49fee.appspot.com",
  messagingSenderId: "568883861345",
  appId: "1:568883861345:web:6075503bc845beb8405720",
  measurementId: "G-7FY1LTMME3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;