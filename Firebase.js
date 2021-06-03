import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyCE2GD2Bt9C8o2uZO_xs3igiHEJYYKE7vk",
  authDomain: "laafigram01.firebaseapp.com",
  projectId: "laafigram01",
  storageBucket: "laafigram01.appspot.com",
  messagingSenderId: "611161971267",
  appId: "1:611161971267:web:ff7fef3a6be3543cd652f6",
  measurementId: "G-6TKPFMJMP9"
};
let app ;
  if (firebase.apps.length==0) {
    app=firebase.initializeApp(firebaseConfig)
  }else{
    app = firebase.app();
  }
const db = app.firestore();
const auth = firebase.auth();
const storage=app.storage();
export {db , auth,};