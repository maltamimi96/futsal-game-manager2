// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnrIhO6cKOOP7PZqKAI94kaAUKDE4xBAo",
  authDomain: "futsal-775bc.firebaseapp.com",
  projectId: "futsal-775bc",
  storageBucket: "futsal-775bc.appspot.com",
  messagingSenderId: "1041459487684",
  appId: "1:1041459487684:web:a599b9ab022afe509f7a91",
  measurementId: "G-DS1MB5V0W9",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
