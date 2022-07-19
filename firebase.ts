// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFepHrBcWJwN1TLnwf_QX3e8aywAblfYY",
    authDomain: "netflixcln-tsnextapp.firebaseapp.com",
    // databaseURL: "",
    projectId: "netflixcln-tsnextapp",
    storageBucket: "netflixcln-tsnextapp.appspot.com",
    messagingSenderId: "884370748088",
    appId: "1:884370748088:web:755c54b71da05ca32a3a4d"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }