// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2QY_550qSnsCtqjUiE5U1wEnOkcuKO_o",
  authDomain: "school-management-a3105.firebaseapp.com",
  projectId: "school-management-a3105",
  storageBucket: "school-management-a3105.appspot.com",
  messagingSenderId: "575519300047",
  appId: "1:575519300047:web:9a1cdaaadea7972eb29aba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export default app;