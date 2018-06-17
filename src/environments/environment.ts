// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
    firebase: {
        apiKey: "AIzaSyA_fgebJgXZ_dvWWjX7LH6Ma0c4UVewbMM",
        authDomain: "creativetodo-pb25.firebaseapp.com",
        databaseURL: "https://creativetodo-pb25.firebaseio.com",
        projectId: "creativetodo-pb25",
        storageBucket: "creativetodo-pb25.appspot.com",
        messagingSenderId: "65522897407"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
