import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC_WRlx0rrdbDhz6CRcep9oAdf2V8U1M8s",
  authDomain: "mern-auth-3e07d.firebaseapp.com",
  projectId: "mern-auth-3e07d",
  storageBucket: "mern-auth-3e07d.appspot.com",
  messagingSenderId: "464949371090",
  appId: "1:464949371090:web:732c5b269e8ef5fa1a8d0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);