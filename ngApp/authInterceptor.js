var app;
(function (app) {
    angular.module('app').factory('AuthInterceptor', function ($window) {
        return {
            request: function (config) {
                console.log("AuthInterceptor IS BEING CALLED++++++++++++++++++++++", config);
                config.headers = config.headers || {};
                if ($window.localStorage.getItem('token')) {
                    console.log("Token from AuthInterceptor ", $window.localStorage.getItem('token'));
                    config.headers.Authorization = 'Bearer ' + $window.localStorage.getItem('token');
                }
                return config;
            }
        };
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aEludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aEludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVBLElBQVUsR0FBRyxDQWtCWjtBQWxCRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsVUFBUyxPQUFPO1FBQy9ELE1BQU0sQ0FBQztZQUNMLE9BQU8sRUFBRSxVQUFTLE1BQU07Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELEVBQUUsTUFBTSxDQUFDLENBQUE7Z0JBQzVFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFHLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO29CQUNqRixNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25GLENBQUM7Z0JBS0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNoQixDQUFDO1NBQ0YsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQWxCUyxHQUFHLEtBQUgsR0FBRyxRQWtCWiJ9