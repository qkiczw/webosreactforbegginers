import Rebase from 're-base';
import firebase, { initializeApp } from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDcIflQeJUDBnOvXbP_GVvT9TJPOx_MZIo",
    authDomain: "catch-of-the-day-lukasz.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-lukasz.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a name export

export { firebaseApp };

// This is a default export

export default base;

