// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3R2I0fTrPHJlt-_xNY3ULaYU-3CJgoIY",
  authDomain: "expense-fire-3b20c.firebaseapp.com",
  projectId: "expense-fire-3b20c",
  storageBucket: "expense-fire-3b20c.appspot.com",
  messagingSenderId: "647667945863",
  appId: "1:647667945863:web:64396175dd4b083b91c322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// import { getFirestore } from "firebase/firestore";
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCUTGQFS4JBMTqmQzRyHW_sjT73f9t-LwU",
//   authDomain: "expense-fire-42ff1.firebaseapp.com",
//   projectId: "expense-fire-42ff1",
//   storageBucket: "expense-fire-42ff1.appspot.com",
//   messagingSenderId: "1028264036",
//   appId: "1:1028264036:web:3e15bd6940072f6b144f71"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
