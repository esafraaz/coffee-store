// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_2UOoFS4VZ5jz29tV1gBwlffA8tPtnK0",
  authDomain: "coffee-store-cf224.firebaseapp.com",
  projectId: "coffee-store-cf224",
  storageBucket: "coffee-store-cf224.appspot.com",
  messagingSenderId: "886789169138",
  appId: "1:886789169138:web:4a6b647f5179d72889d56b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;