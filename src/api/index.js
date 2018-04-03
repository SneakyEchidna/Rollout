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
            events: [],
            photoURL
         })
      }
    })
  }

  addEvent = (data) => {
    const user = firebase.db.ref(`/users/${data.uid}`)
    const newEventKey = firebase.db.ref('/events').push().key;
    const updates = {};
    
    user.once('value')
    .then(snap => {
      console.log(snap.events)
      const userEvents = [...snap.val().events || [], newEventKey]
      return {...snap.val(), userEvents}
    })
    .then(userData => {
      console.log(data, userData)
      updates[`/events/${newEventKey}`] = data;
      updates[`/users/${data.uid}`] = userData;
      firebase.db.ref().update(updates)
    })
    
  }
}