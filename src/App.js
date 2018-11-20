import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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
  constructor(props){
    super(props);
    this.state={
      currentRoom: "",
    }
    this.currentRoom = this.currentRoom.bind(this);
  }

  currentRoom(room){
    this.setState({currentRoom: room });
    alert(room);
  }

  render() {
    return(
      <div className ="App">
      <header className="App-header">
      Firebase Chat
      </header>
        <div className = "room-list">
          <RoomList
          firebase={firebase}
          currentRoom={this.currentRoom}
          />
        </div>
        <div className= "message-list">
          <MessageList firebase={firebase} />
        </div>
      </div>
    );
  }
}

export default App;
