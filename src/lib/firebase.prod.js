import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyA2_TjbX33V4Q7WZgFKiXTMKlqgdFfzfVA",
  authDomain: "kes-netflix.firebaseapp.com",
  databaseURL: "https://kes-netflix.firebaseio.com",
  projectId: "kes-netflix",
  storageBucket: "kes-netflix.appspot.com",
  messagingSenderId: "898652713765",
  appId: "1:898652713765:web:073440f660a8e01571e0cc",
  measurementId: "G-F3HCS2870Y"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
