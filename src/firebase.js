// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

// export const auth= app.auth()
// export default app;

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCs3JzAZNZILJK6JLgx-pwC2DG3sG8zzaE",
    authDomain: "signup-auth-849a7.firebaseapp.com",
    projectId: "signup-auth-849a7",
    storageBucket: "signup-auth-849a7.appspot.com",
    messagingSenderId: "827453307504",
    appId: "1:827453307504:web:1bbe25e56eede2b06452b5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase