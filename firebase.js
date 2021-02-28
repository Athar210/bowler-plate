import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC6tvddS2c88-v55CCnp57CTj_-bXprOtk",
    authDomain: "blood-bank-d894e.firebaseapp.com",
    projectId: "blood-bank-d894e",
    storageBucket: "blood-bank-d894e.appspot.com",
    messagingSenderId: "652620066812",
    appId: "1:652620066812:web:b2cef8851251e293cf0c79"
  };

let app;
if(firebase.apps.length==0){
    app =firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}


const db = app.firestore();
const auth= firebase.auth();
export {db,auth};