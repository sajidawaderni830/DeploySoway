
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCHmfVAyagaEdn5lQI5Z3XXi_x1jCgObAs",
    authDomain: "sowa-50d53.firebaseapp.com",
    projectId: "sowa-50d53",
    storageBucket: "sowa-50d53.appspot.com",
    messagingSenderId: "1032073633369",
    appId: "1:1032073633369:web:4d440b52cdb75abcfddb48",
    measurementId: "G-55N2Q04HTW"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}





export { firebase };