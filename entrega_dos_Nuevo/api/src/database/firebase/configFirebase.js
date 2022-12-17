import admin from 'firebase-admin'
import { readFileSync } from 'fs'
const serviceAccount = JSON.parse(readFileSync('./firebaseKey.json'))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://sanitarioscoder.firebase.io'
})

console.log('Database Connect')
