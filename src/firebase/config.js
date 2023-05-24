import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAmbFI1is9O7L2GVtEHFPwmRXxbQs4goXA",
    authDomain: "thedojosite-d93b4.firebaseapp.com",
    projectId: "thedojosite-d93b4",
    storageBucket: "thedojosite-d93b4.appspot.com",
    messagingSenderId: "154468887988",
    appId: "1:154468887988:web:f633d52dd3a53f8ad896e1"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };