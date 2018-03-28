import React from 'react';
import Rollout from './Rollout';
import SignIn from './SignIn'
import { firebase } from '../firebase'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'anonimous'
    }
  }
  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.setState({
          ...this.state,
          name: authUser.displayName,
          uid: authUser.uid
        })
      } else {
        this.setState({
          ...this.state,
          name: null,
          uid: null
        })
      }
    })
  }
  render() {
    return (
      <div>
        <SignIn name={this.state.name} uid={this.state.uid} />
        <Rollout />
      </div>
    )
  }
}

export default App