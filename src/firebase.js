import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC0u7BrBVyAmIaLNEkH946AreJQntrZctY",
  authDomain: "remcol-55cce.firebaseapp.com",
  projectId: "remcol-55cce",
  storageBucket: "remcol-55cce.appspot.com",
  messagingSenderId: "306912617372",
  appId: "1:306912617372:web:9212da5377b453a6741e59",
  measurementId: "G-6Y622DJ4HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);