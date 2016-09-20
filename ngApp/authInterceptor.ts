// namespace app {
//   angular.module('app').factory('AuthInterceptor', function($window){
//     return {
//       request: function(config) {
//         config.header = config.header || {};
//         if($window.localStorage.getItem('token')){
//           config.headers.Authorization = 'Bearer' + $window.localStorage.getItem('token')
//         }
//         return config;
//       }
//     }
//   })
// }


namespace app {
  angular.module('app').factory('AuthInterceptor', function($window) {
    return {
      request: function(config) {
        console.log("AuthInterceptor IS BEING CALLED++++++++++++++++++++++", config)
        config.headers = config.headers || { };
        if ($window.localStorage.getItem('token')) {
          console.log("Token from AuthInterceptor ", $window.localStorage.getItem('token'))
          config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
        }
        //  else {
        //   this.$state.go("Home");
        //   this.$state.go('UserProfile')
        // }
        return config;
      }
    }
  });
}
