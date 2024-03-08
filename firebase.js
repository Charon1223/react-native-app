// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX6Ep0pYEiYqxkYdSXiC0CRvDJwIv__Q8",
  authDomain: "react-native-todo-app-74491.firebaseapp.com",
  projectId: "react-native-todo-app-74491",
  storageBucket: "react-native-todo-app-74491.appspot.com",
  messagingSenderId: "172812988076",
  appId: "1:172812988076:web:69ed85d5268d9fef7ab909",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
