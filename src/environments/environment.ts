// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  place: 'Ivry-le-Temple, Île-de-France, France',
  degreeType: 'C',
  weatherRefreshInterval: 20 * 60 * 1000, // Every 20 minutes
  solax: {
    refreshInterval: 20_1000, // Every 20 seconds. The obtain frequency need to be lower than 10 times / min and 10, 000 times / day.
    tokenId: '', // tokenID from Solax
    sn: '', // Registration No. (module SN)
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
