import firebase from "firebase/app"; //pulling the firebase/app utility library
import "firebase/firestore"; //importing firestore library (for db)
import "firebase/auth"; //importing the auth library

// The config object is how firebase knows that your application is connected to your firebase account and database
const firebaseConfig = {
  apiKey: "AIzaSyBaX8VdqZl1Vm58hk0ABiBBe_q3hlL5x18",
  authDomain: "crwn-db-marcelsc.firebaseapp.com",
  projectId: "crwn-db-marcelsc",
  storageBucket: "crwn-db-marcelsc.appspot.com",
  messagingSenderId: "681764934784",
  appId: "1:681764934784:web:2f7fdeef36a14cde64c265",
};

firebase.initializeApp(firebaseConfig); //bootstrap firebase with this config

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// setting up Google authentication

// creating a new instance of the GoogleAuth class from the auth library obtained by invoking auth() method in line 17
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); //always trigger the google popup when using the Google auth

export const signInWithGoogle = () => auth.signInWithPopup(provider); //triggers the popup with the provider (google auth), this func is triggered onClick in the component

export default firebase; //just in case we want the whole library

// this works with Google enabled as auth method on Firebase console for this project