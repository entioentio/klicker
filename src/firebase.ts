import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// ... other firebase imports

export const firebaseApp = initializeApp({
  /* apiKey: "AIzaSyCzO1tFIPeqvvUhb_wz7xydzjXQIM6Ck2o",
  authDomain: "kicker-app-9cd86.firebaseapp.com",
  projectId: "kicker-app-9cd86",
  storageBucket: "kicker-app-9cd86.appspot.com",
  messagingSenderId: "269451121959",
  appId: "1:269451121959:web:cc44393a0239a532bd4502",
  measurementId: "G-ELFGF2JKB9", */
  apiKey: "AIzaSyCejCxyBSOJ7WMboCu8GDkkPyXzbUASuew",
    authDomain: "kicker-olama.firebaseapp.com",
    projectId: "kicker-olama",
    storageBucket: "kicker-olama.appspot.com",
    messagingSenderId: "489009171392",
    appId: "1:489009171392:web:72936f3d219a77d2701625",
});

// used for the firestore refs
export const db = getFirestore(firebaseApp);
