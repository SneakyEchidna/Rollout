import { firebase } from '../firebase'

export default class Db {
  users = firebase.db.ref('/users/')
  auth = firebase.auth
  
  addUser = (uid, displayName, email, photoURL) => {
    const user = firebase.db.ref(`/users/${uid}`)
    user.once('value').then((snap) => {
      if (!snap.node) {
        this.users.child(uid).set(
          { displayName,
            email,
            photoURL
         })
      }
    })
  }
}