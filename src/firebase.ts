import { initializeApp } from 'firebase/app'

console.log(process.env)

const firebaseConfig = {
  apiKey: 'AIzaSyCUbmREgTcDPA9NJYXLCrBHhpDOKXewloA',
  authDomain: 'authcontact-c6b2e.firebaseapp.com',
  projectId: 'authcontact-c6b2e',
  storageBucket: 'authcontact-c6b2e.appspot.com',
  messagingSenderId: '1054085479697',
  appId: '1:1054085479697:web:7ec454a45817664c6120b0',
}

const app = initializeApp(firebaseConfig)
