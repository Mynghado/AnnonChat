import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD6UYnyavrkD47XqiGMAUY7JZekxbhFwpo",
  authDomain: "annon-chat.firebaseapp.com",
  databaseURL: "https://annon-chat.firebaseio.com",
  projectId: "annon-chat",
  storageBucket: "annon-chat.appspot.com",
  messagingSenderId: "967046558147"
};
  
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()
