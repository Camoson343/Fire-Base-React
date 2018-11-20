import React, { Component } from 'react';
import '../RoomList.css';



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
      event.preventDefault();
      let newRoomName = this.state.value;
      this.roomsRef.push({
        name: newRoomName
      })
    }

    createRoom(newRoomName){
      this.setState({ name: newRoomName })
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
      <section id="rooms" className="rounded">
      <form onSubmit={this.handleSubmit}>
        <label className="room-text">
          <input type="text" value={this.state.value} onChange={this.handleChange} className="room-name" placeholder="add new room" />
        </label>
          <input className="btn btn-secondary" type="submit" value="submit" />
      </form>
        <div className="add-rooms">
          <table className="table table-hover">
            <tbody id="room-items">
            {this.state.rooms.map(room =>
              <tr className="rooms-made" key={room.key}>
                <td>{room.name}</td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default RoomList;
