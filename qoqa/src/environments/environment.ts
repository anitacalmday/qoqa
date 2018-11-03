// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBlyM7FMirbO2-kul5YZhFDrdmXFJPyI-s",
    authDomain: "qoqa-63e4f.firebaseapp.com",
    databaseURL: "https://qoqa-63e4f.firebaseio.com",
    projectId: "qoqa-63e4f",
    storageBucket: "qoqa-63e4f.appspot.com",
    messagingSenderId: "967961335586"
  }
};

var config = {
  apiKey: "AIzaSyBlyM7FMirbO2-kul5YZhFDrdmXFJPyI-s",
  authDomain: "qoqa-63e4f.firebaseapp.com",
  databaseURL: "https://qoqa-63e4f.firebaseio.com",
  storageBucket: "qoqa-63e4f.appspot.com"
};
firebase.initializeApp(config);
var database = firebase.database();

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
