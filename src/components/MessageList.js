import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: []
  }
    this.messagesRef = this.props.firebase.database().ref("messages");

  }

  componentDidMount(){
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) });
      });
  }


  render(){
    return(
      <section className="message-content">
        <h1>{this.props.currentRoom.name}</h1>
        <div>{this.state.messages.filter(message => message.roomID === this.props.currentRoom.key).map(message =>
          <div className="room-content" key={message.key}>
            {message.content}
          </div>
        )}
        </div>
      </section>
    )
  }
}

export default MessageList;
