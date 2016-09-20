var app;
(function (app) {
    angular.module('app').factory('AuthInterceptor', function ($window, $state) {
        return {
            request: function (config) {
                console.log("AuthInterceptor IS BEING CALLED++++++++++++++++++++++", config);
                config.headers = config.headers || {};
                if ($window.localStorage.getItem('token')) {
                    console.log("Token from AuthInterceptor ", $window.localStorage.getItem('token'));
                    config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
                }
                else {
                    this.$state.go("Home");
                }
                return config;
            }
        };
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aEludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aEludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLElBQVUsR0FBRyxDQWlCWjtBQWpCRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsVUFBUyxPQUFPLEVBQUUsTUFBTTtRQUN2RSxNQUFNLENBQUM7WUFDTCxPQUFPLEVBQUUsVUFBUyxNQUFNO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHVEQUF1RCxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUM1RSxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRyxDQUFDO2dCQUN2QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtvQkFDakYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV6QixDQUFDO2dCQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDaEIsQ0FBQztTQUNGLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUFqQlMsR0FBRyxLQUFILEdBQUcsUUFpQloifQ==