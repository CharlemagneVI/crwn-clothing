import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2HAre4HI_yzoy7RV-vQA9JQYDA5lLCsU",
    authDomain: "crwn-db-1846e.firebaseapp.com",
    databaseURL: "https://crwn-db-1846e.firebaseio.com",
    projectId: "crwn-db-1846e",
    storageBucket: "",
    messagingSenderId: "127793472990",
    appId: "1:127793472990:web:ad4acc843d096f84"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;