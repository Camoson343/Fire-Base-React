import React, { Component } from 'react';

class User extends Component{
  constructor(props){
    super(props);

    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);

  }
  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn(){
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider ).then((result) => {
      const user = result.user;
      this.props.setUser(user);
    });
  }

  signOut(){
    this.props.firebase.auth().signOut().then(() => {
      this.props.setUser('');
    });
  }

  render(){
    return(
      <section className="user-info">
        <div className="display-name">
        <h1>{this.props.user ? this.props.user.displayName: ''}</h1>
        </div>
        <button className="sign-in" onClick={this.signIn}>Sign In</button>
        <button className="sign-out" onClick={this.signOut}>Sign Out</button>
      </section>
    )
  }

}



export default User;
