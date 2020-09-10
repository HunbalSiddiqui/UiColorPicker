import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyATxZsp28MYDzrAWVuRPoMFKW-q-Q8mnbo",
    authDomain: "customuicolorpicker.firebaseapp.com",
    databaseURL: "https://customuicolorpicker.firebaseio.com",
    projectId: "customuicolorpicker",
    storageBucket: "customuicolorpicker.appspot.com",
    messagingSenderId: "55666007832",
    appId: "1:55666007832:web:a06fa27874a1d2d704886d",
    measurementId: "G-614LKWGFCC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore()
export const serverTimestamp = () => firebase.firestore.Timestamp.fromDate(new Date())