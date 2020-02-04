import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
	apiKey: 'AIzaSyD4cGhYm2qAF9Ny6hAiBwqQwOY5j_Bn_tY',
	authDomain: 'react-chat-app-22e02.firebaseapp.com',
	databaseURL: 'https://react-chat-app-22e02.firebaseio.com',
	projectId: 'react-chat-app-22e02',
	storageBucket: 'react-chat-app-22e02.appspot.com',
	messagingSenderId: '573737225723',
	appId: '1:573737225723:web:296ef8f3d9bc16f99b4f5e',
	measurementId: 'G-CKF5YX5EVK',
});

ReactDOM.render(<div>Hello world</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
