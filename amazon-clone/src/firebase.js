import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBCFS46uj-4aUqmvNKGuHDOHOEnbUXUDdw",
    authDomain: "challenge-24062.firebaseapp.com",
    databaseURL: "https://challenge-24062.firebaseio.com",
    projectId: "challenge-24062",
    storageBucket: "challenge-24062.appspot.com",
    messagingSenderId: "82605804275",
    appId: "1:82605804275:web:30c2960e68ba12c9ba8586",
    measurementId: "G-BNQ42YVH4G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };