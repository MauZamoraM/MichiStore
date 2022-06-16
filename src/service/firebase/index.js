import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCmcyDgnpKfoVPiY7AcmYbUB507OIzODTM',
	authDomain: 'michistore-c96bb.firebaseapp.com',
	projectId: 'michistore-c96bb',
	storageBucket: 'michistore-c96bb.appspot.com',
	messagingSenderId: '200241429926',
	appId: '1:200241429926:web:920a5c63c84ae7c3a1a367',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
