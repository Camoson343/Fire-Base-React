import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props){
    super(props);

    this.state ={
      rooms: [],
      value: '',
      name: ''
    }
      this.roomsRef = this.props.firebase.database().ref('rooms');
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.createRoom = this.createRoom.bind(this);


  }

    handleChange(event){
      this.setState({ value: event.target.value });
    }

    handleSubmit(event){
      let newRoomName = this.state.value;
      this.roomsRef.push({
        rooms: newRoomName
      })
      event.preventDefault();
    }

    createRoom(newRoomName){
      this.setState({ rooms: newRoomName })
    }



  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) });
    });
  }

  render(){
    return(
      <section>
        <h1 className="room-list">
          <div>
          {this.state.rooms.map(room => room.name)}
          </div>
        </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
          Room Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} className="room-name" />
          </label>
            <input type="submit" value="submit" />
        </form>
      </section>
    );
  }
}

export default RoomList;
