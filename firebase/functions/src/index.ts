import * as functions from 'firebase-functions';
// tslint:disable-next-line
import { Application } from "express-serve-static-core";
import  app from './server'
import  graphqlServer  from './graphql'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const api = functions
        .runWith({memory: '512MB', timeoutSeconds: 10})
        .https.onRequest(app)


const getExpress = async () => {
  const server =  graphqlServer;
  server.createHttpServer({});
  return server.express;
};

// server.applyMiddleware({ app, path: "/", cors: true });

let express: Application;
let isExpressInitialized = false;
export const graphql = functions
         .runWith({ memory: "512MB", timeoutSeconds: 10 })
         .https.onRequest(async (req, res) => {
           if (isExpressInitialized === false) {
             express = await getExpress();
             isExpressInitialized = true;
           }
           return express(req, res);
         });
