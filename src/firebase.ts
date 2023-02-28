import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCejCxyBSOJ7WMboCu8GDkkPyXzbUASuew",
    authDomain: "kicker-olama.firebaseapp.com",
    projectId: "kicker-olama",
    storageBucket: "kicker-olama.appspot.com",
    messagingSenderId: "489009171392",
    appId: "1:489009171392:web:72936f3d219a77d2701625",
});

// used for the firestore refs
export const db = getFirestore(firebaseApp);
