// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO8u6sN_VAxZAE5IiuyBn7QLaqL5wjKRM",
  authDomain: "email-password-auth-reca-24f19.firebaseapp.com",
  projectId: "email-password-auth-reca-24f19",
  storageBucket: "email-password-auth-reca-24f19.appspot.com",
  messagingSenderId: "242318511113",
  appId: "1:242318511113:web:82d548f94d7bd8690f7cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;