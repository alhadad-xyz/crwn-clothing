import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAOUwf1MztKXFrksSeYs1Pc9xHvaKZXrLY",
  authDomain: "crwn-clothing-db-6086f.firebaseapp.com",
  projectId: "crwn-clothing-db-6086f",
  storageBucket: "crwn-clothing-db-6086f.appspot.com",
  messagingSenderId: "543029737464",
  appId: "1:543029737464:web:7243e1917dcb4bb9d4080d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
