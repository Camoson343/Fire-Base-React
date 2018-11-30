import React, { Component } from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);

    this.state = {
      messages: [],
      newMessage: ''
  }
    this.messagesRef = this.props.firebase.database().ref("messages");
    this.handleChange = this.handleChange.bind(this);
    this.createMessage = this.createMessage.bind(this);

  }

  componentDidMount(){
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) });
      });
  }

  handleChange(event){
    this.setState({ newMessage: event.target.value });
  }

  createMessage(event){
    event.preventDefault();
    this.messagesRef.push({
      content: this.state.newMessage,
      roomID: this.props.currentRoom.key,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      username: this.props.user ? this.props.user.displayName: ''
    });
    this.setState({newMessage: ''});
  }

  render(){
    return(
      <section className="message-content">
        <h1>{this.props.currentRoom.name}</h1>

      <div>{this.state.messages.filter(message => message.roomID === this.props.currentRoom.key).map(message =>
          <div className="message-list" key={message.key}>
            <div>{message.content}</div>
            <div>{message.username}</div>
            <div>{message.sentAt}</div>
          </div>
          )}
         </div>
         <form className="new-messages" onSubmit={this.createMessage}>
          <label className="message-text">
            <input type="textbox" value={this.state.newMessage} onChange={this.handleChange} className="message-content" placeholder="say something" />
          </label>
          <input className="btn btn-secondary" type="submit" value="submit" />
         </form>
      </section>
    )
  }
}

export default MessageList;
