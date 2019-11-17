import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var firebaseConfig = {
    apiKey:process.env.REACT_APP_apiKey,
    authDomain:process.env.REACT_APP_authDomain,
    databaseURL:process.env.REACT_APP_databaseURL,
    projectId:process.env.REACT_APP_projectId,
    storageBucket:process.env.REACT_APP_storageBucket,
    messagingSenderId:process.env.REACT_APP_messagingSenderId,
    appId:process.env.REACT_APP_appId,
    measurementId:process.env.REACT_APP_measurementId
  };
  //further firebase config required
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();


  const firebaseDB = firebase.database();
  const firebaseContactDetails = firebaseDB.ref('contacts');


  export {
    firebase,
    firebaseContactDetails
  }

