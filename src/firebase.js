import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBjUwEUV0THWLX8TYt2L-tPINJH356fN6c",
    authDomain: "facebook-clone-adib.firebaseapp.com",
    projectId: "facebook-clone-adib",
    storageBucket: "facebook-clone-adib.appspot.com",
    messagingSenderId: "516856803723",
    appId: "1:516856803723:web:0b6825931402b690f27f8e",
    measurementId: "G-C0DPH0F9TM"
  };

const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db