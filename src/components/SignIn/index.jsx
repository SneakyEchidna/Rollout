import React from 'react';
import { auth } from '../../firebase'
import Db from '../../api'

class SignIn extends React.Component {
  db = new Db
  signIn = () => {
    auth.authWithGoogle().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // Adding user to DB at '/users${uid}' if it not exists
      this.db.addUser(user.uid, user.displayName, user.email, user.photoURL)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(errorCode, errorMessage)
    });
  }

  signOut = () => {
    auth.signOut()
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <button onClick={this.signIn}>SignIn</button>
        <button onClick={this.signOut}>SignOut</button>
      </div>)
  }
}

export default SignIn