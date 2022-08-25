// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const base_url1=`http://localhost:8080`
export const environment = {
  production: false,
  getUsers:`${base_url1}/allUsers`,
  deleteUser:`${base_url1}/deleteUserById`,
  CreateUser:`${base_url1}/createUser`,
  login:`${base_url1}/login/`,
  validateToken: `${base_url1}/secure/validate-token/`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
