import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyB6kwZ6iL_w1z1Satzw5YWJ8dO8nC9QiJI',
  authDomain: 'devaventure-first-project.firebaseapp.com',
  databaseURL: 'https://devaventure-first-project.firebaseio.com',
  projectId: 'devaventure-first-project',
  storageBucket: 'devaventure-first-project.appspot.com',
  messagingSenderId: '600576327713'
}

firebase.initializeApp(config)
const database = firebase.database()
const auth = firebase.auth()
export default {
  database,
  auth
}
