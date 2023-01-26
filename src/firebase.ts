import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCzO1tFIPeqvvUhb_wz7xydzjXQIM6Ck2o",
  authDomain: "kicker-app-9cd86.firebaseapp.com",
  projectId: "kicker-app-9cd86",
  storageBucket: "kicker-app-9cd86.appspot.com",
  messagingSenderId: "269451121959",
  appId: "1:269451121959:web:cc44393a0239a532bd4502",
  measurementId: "G-ELFGF2JKB9",
});

// used for the firestore refs
export const db = getFirestore(firebaseApp);
