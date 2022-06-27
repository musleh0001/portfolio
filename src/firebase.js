import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyDgk7PpaIMzJItx3ZVI-Pe2wkB8v9MYgo4",
	authDomain: "portfolio-9142d.firebaseapp.com",
	projectId: "portfolio-9142d",
	storageBucket: "portfolio-9142d.appspot.com",
	messagingSenderId: "414625253911",
	appId: "1:414625253911:web:26830ab2cb60deb6b12a52",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
