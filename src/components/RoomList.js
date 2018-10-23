import React, { Component } from 'react';


class RoomList extends Component {
  constructor(){
    super();

    this.state ={
      rooms: []
  }
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      console.log(snapshot);
    });
  }

  render(){
    return(
      <h1>Test</h1>
    );
  }
}

export default RoomList;
