import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyDlbJFWXA2OPamDzKd6Lg5sz02fsEzgbnw",
    authDomain: "fire-base-react-669e0.firebaseapp.com",
    databaseURL: "https://fire-base-react-669e0.firebaseio.com",
    projectId: "fire-base-react-669e0",
    storageBucket: "fire-base-react-669e0.appspot.com",
    messagingSenderId: "648892805817"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return(
      <div className ="App">
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
