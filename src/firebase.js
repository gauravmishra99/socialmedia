import firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBdSQE-8BRn8JCluMG-nYWTz5I5LPGjwGs",
  authDomain: "social-card-c45d2.firebaseapp.com",
  databaseURL: "https://social-card-c45d2.firebaseio.com",
  projectId: "social-card-c45d2",
  storageBucket: "social-card-c45d2.appspot.com",
  messagingSenderId: "695383114199",
  appId: "1:695383114199:web:cfc806ba75aa50d1918b92",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
export default fire;
