import React, { Component } from 'react';


class RoomList extends Component {
  constructor(props){
    super(props);

    this.state ={
      rooms: [],
      value: ''
    }
      this.roomsRef = this.props.firebase.database().ref('rooms');
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);


  }

    handleChange(event){
      this.setState({ value: event.target.value });
    }

    handleSubmit(event){
      alert("this was submitted: " + this.state.value)
      event.preventDefault();
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
          {this.state.rooms.map(room => + room.key)}
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
