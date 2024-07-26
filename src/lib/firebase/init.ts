// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNl5Ksut7RXSAM1_wPd2YBsp8JSipn2HY",
  authDomain: "nextjs-dcf89.firebaseapp.com",
  projectId: "nextjs-dcf89",
  storageBucket: "nextjs-dcf89.appspot.com",
  messagingSenderId: "934927193562",
  appId: "1:934927193562:web:fcd558a7a5904085931ce3",
  measurementId: "G-3XTSXLLS7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;