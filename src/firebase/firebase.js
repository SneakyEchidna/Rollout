import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAZMsjIvEmEtrVRubweGX38HL69MmgsUS4",
  authDomain: "rollout-61aee.firebaseapp.com",
  databaseURL: "https://rollout-61aee.firebaseio.com",
  projectId: "rollout-61aee",
  storageBucket: "rollout-61aee.appspot.com",
  messagingSenderId: "128242484802"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const google = new firebase.auth.GoogleAuthProvider()
export const fire = firebase