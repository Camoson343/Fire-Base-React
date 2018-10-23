import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';


  var config = {
    apiKey: "AIzaSyBTFpSXlW7dKj-Gw-93-AlsXSwmhifN0ws",
    authDomain: "fire-base-react.firebaseapp.com",
    databaseURL: "https://fire-base-react.firebaseio.com",
    projectId: "fire-base-react",
    storageBucket: "fire-base-react.appspot.com",
    messagingSenderId: "911265247529"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return(
      <RoomList />
    );
  }
}

export default App;
