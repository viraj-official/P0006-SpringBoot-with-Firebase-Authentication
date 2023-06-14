import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-melXCdmV7-XUpEbtyRa08y9AdaKzETY",
  authDomain: "router-v6-4041d.firebaseapp.com",
  projectId: "router-v6-4041d",
  storageBucket: "router-v6-4041d.appspot.com",
  messagingSenderId: "709372743402",
  appId: "1:709372743402:web:4beb2a522f8563938a9193",
  measurementId: "G-GN3KYTPYHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default app;
export { auth, db };