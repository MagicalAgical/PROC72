import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBamNTSM3ydKL3xpWftxh3sPc_7XFw40hI",
	authDomain: "firestoneforprojec.firebaseapp.com",
	projectId: "firestoneforprojec",
	storageBucket: "firestoneforprojec.appspot.com",
	messagingSenderId: "843767255777",
	appId: "1:843767255777:web:5d1b2e0d8019aa9d659da0",
	measurementId: "G-X1DB67ZWL1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
