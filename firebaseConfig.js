// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: 'coderhouse---ecommerce-31ca4.firebaseapp.com',
  projectId: 'coderhouse---ecommerce-31ca4',
  storageBucket: 'coderhouse---ecommerce-31ca4.appspot.com',
  messagingSenderId: '580494836021',
  appId: '1:580494836021:web:1f3c4bd50d1fef434fcc7c'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
