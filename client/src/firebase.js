// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB17F2C6GNOsXHU74pAXjtezV1Z5XPX38s",
	authDomain: "shilp24-iitbhu-74473.firebaseapp.com",
	projectId: "shilp24-iitbhu-74473",
	storageBucket: "shilp24-iitbhu-74473.appspot.com",
	messagingSenderId: "788469682124",
	appId: "1:788469682124:web:6957ae2f57e878a60c9769",
	measurementId: "G-RHWY9Q2PNT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export { app, auth, provider, db };
