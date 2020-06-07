import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAwul_kNMzeAi1qhLjPmOFkxPCrrlU21x8",
  authDomain: "mcpass-ph.firebaseapp.com",
  databaseURL: "https://mcpass-ph.firebaseio.com",
  projectId: "mcpass-ph",
  storageBucket: "mcpass-ph.appspot.com",
  messagingSenderId: "1050811417269",
  appId: "1:1050811417269:web:06c2f470577e0e7d36f4fc",
  measurementId: "G-0XHHL72WMT"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
