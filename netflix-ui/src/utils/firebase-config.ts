// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCNyaDPGvdnK7nqicsdgAEANVT3xI7Aih8',
  authDomain: 'react-netflix-clone-65782.firebaseapp.com',
  projectId: 'react-netflix-clone-65782',
  storageBucket: 'react-netflix-clone-65782.appspot.com',
  messagingSenderId: '583146428359',
  appId: '1:583146428359:web:7c802af4b31d5a50c76be2',
  measurementId: 'G-LE70JF2223',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
