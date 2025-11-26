// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLUA896KXnX1kDTaP5rUw3yAPf9U3Bfw8",
  authDomain: "subhedar-global-tech.firebaseapp.com",
  projectId: "subhedar-global-tech",
  storageBucket: "subhedar-global-tech.firebasestorage.app",
  messagingSenderId: "304046253264",
  appId: "1:304046253264:web:25f3037071849adfc36ad5",
  measurementId: "G-5Q7EG4C3TG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
