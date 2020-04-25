import * as functions from 'firebase-functions';
import  app from './server'
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const api = functions
        .runWith({memory: '512MB', timeoutSeconds: 10})
        .https.onRequest(app)
