// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClPZaCW71iBik9gGFdx_8RTETNnwqDmfs",
  authDomain: "auth-provider-833fc.firebaseapp.com",
  projectId: "auth-provider-833fc",
  storageBucket: "auth-provider-833fc.appspot.com",
  messagingSenderId: "652188181986",
  appId: "1:652188181986:web:3c3fda4500451bcad505bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
