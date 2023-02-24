import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import dotenv from "dotenv";
// import dotenv from "dotenv-webpack";

// dotenv.config();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDING_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA3XDBfOZ8Xm_ld_r70ZMU6Z7Nb0LRL0Rc",
  authDomain: "sanitas-81cc4.firebaseapp.com",
  projectId: "sanitas-81cc4",
  storageBucket: "sanitas-81cc4.appspot.com",
  messagingSenderId: "272040669311",
  appId: "1:272040669311:web:4c817fba7f55fc5a604f4a",
};
const app = firebase.initializeApp(firebaseConfig);

//   const auth = firebase.auth()
const auth = firebase.getAuth();
auth.languageCode = "en";
//   const

//Yet to complete
export { auth, app };
