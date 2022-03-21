// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { getDatabase, ref, query, orderByChild, onValue,child, get,set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqIngCsPEFhLZBy7FYECbUeJrMqjDRx5Q",
  authDomain: "twitter-1b4e1.firebaseapp.com",
  databaseURL: "https://twitter-1b4e1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twitter-1b4e1",
  storageBucket: "twitter-1b4e1.appspot.com",
  messagingSenderId: "843461197250",
  appId: "1:843461197250:web:508eac9f5e86ae88ee2a5b"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
//
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const database = getDatabase();
const usersRef = ref(database, 'users');
export default firebase;

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithEmail = async email =>  {
  const userData =  await  auth.signInWithEmailAndPassword(email, firebaseConfig.apiKey);
  let _delegate = userData['user']['_delegate'];
  const {accessToken: idToken, uid} = _delegate
  return{
    idToken: idToken,
    localId: uid
  }
}


export const signUpWithEmail = async (email, username) => {
  let data = await auth.createUserWithEmailAndPassword(email, firebaseConfig.apiKey)
  let _delegate = data['user']['_delegate'];
  const {accessToken, uid} = _delegate
  await registerUser(uid, username,email);
  return {
    idToken: accessToken,
    localId: uid,
    email: email,
    username: username,
    alias: uid
  }
}
export const getUser = async (uid) => {
    return await get(child(ref(database), `users/${uid}`)).then(sn =>sn.val());
}
export const registerUser = async (uid, username, email) => {
  await set(ref(database,  `users/${uid}`),{
    username: username,
    email: email,
    alias: uid
  })
}

