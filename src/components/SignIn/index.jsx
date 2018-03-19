import React from 'react';
import { auth, firebase } from '../../firebase'

class SignIn extends React.Component {
  state = {
    token: null,
    name: null
  }
  signIn = () => {
    auth.authWithGoogle().then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      this.setState({
        token: token,
        name: user.displayName
      })
      console.log(user)
      console.log(firebase.fire.UserInfo)

    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });
  }

  signOut = () => {
    auth.signOut()
    console.log(firebase.fire.User)
  }

  render() {
    return (
      <div>
        <button onClick={this.signIn}>SignIn</button>
        <button onClick={this.signOut}>SignOut</button>
      </div>)
  }
}

export default SignIn