// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDq0EnMGd-6qrcIZ0qUQvKxIDJV5uRvtKs",
//   authDomain: "test-project-559e1.firebaseapp.com",
//   projectId: "test-project-559e1",
//   storageBucket: "test-project-559e1.appspot.com",
//   messagingSenderId: "418042337809",
//   appId: "1:418042337809:web:e05f4adbfb8d9d02286fb0",
//   measurementId: "G-7DTEW2E7PY"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBtbNBAM9HhqntaaF0f6HY5512iVGsNpFg",
//   authDomain: "expense-tracker-e4b69.firebaseapp.com",
//   projectId: "expense-tracker-e4b69",
//   storageBucket: "expense-tracker-e4b69.appspot.com",
//   messagingSenderId: "408839719042",
//   appId: "1:408839719042:web:9aa55959c22d74348e0c9b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };


//expense2
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo2bJ_PbJ-4SH3fIsYu03bPcC_0SNbFzk",
  authDomain: "expense2-d787e.firebaseapp.com",
  projectId: "expense2-d787e",
  storageBucket: "expense2-d787e.appspot.com",
  messagingSenderId: "291016486460",
  appId: "1:291016486460:web:07dc2a5f76a2a306165d39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
