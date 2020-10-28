import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7rwTDi5TPA6R0Pk6nkooSCjGCctCNZO0",
    authDomain: "crwn-db-718d7.firebaseapp.com",
    databaseURL: "https://crwn-db-718d7.firebaseio.com",
    projectId: "crwn-db-718d7",
    storageBucket: "crwn-db-718d7.appspot.com",
    messagingSenderId: "373717499227",
    appId: "1:373717499227:web:bddb4036c08329bb2eee7e",
    measurementId: "G-WXYWHM93C2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;