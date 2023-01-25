import React, { useState } from "react";
import './App.css';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6BN7z4Ugh70tpDlPEbV5DF3StI-10i1c",
  authDomain: "somehost-45706.firebaseapp.com",
  databaseURL: "https://somehost-45706-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "somehost-45706",
  storageBucket: "somehost-45706.appspot.com",
  messagingSenderId: "449358141131",
  appId: "1:449358141131:web:18d52e3c9683aa796f2d4e",
  measurementId: "G-KVZ3P92YH9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

var ui = new firebaseui.auth.AuthUI(firebase.auth());

function App() {

  const upload = () => {
    
  };

  const read = () => {
    
  };



  return (
    <div className="App">
      <div onClick={upload} className="App-header">
        Upload Books
      </div>
      <div onClick={read} className="App-header">
        Read Books
      </div>
    </div>
  );
}

export default App;
