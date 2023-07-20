import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyADOHckDUrJgge8nZ8Z821GmaUxB2HXxJs',
  authDomain: 'chat-web-app-e6bd3.firebaseapp.com',
  databaseURL: 'https://chat-web-app-e6bd3-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-e6bd3',
  storageBucket: 'chat-web-app-e6bd3.appspot.com',
  messagingSenderId: '31184176224',
  appId: '1:31184176224:web:85260ec770d1fed83aaf05',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
