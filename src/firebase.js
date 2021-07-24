import firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyB2q0qAw3tsRLr0Mia0abZGkgiFkRKUL5k",
    authDomain: "resume-builder-634d8.firebaseapp.com",
    projectId: "resume-builder-634d8",
    storageBucket: "resume-builder-634d8.appspot.com",
    messagingSenderId: "502454784336",
    appId: "1:502454784336:web:1e01d67830cad5c1eedc55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;