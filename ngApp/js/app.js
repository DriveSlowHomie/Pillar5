'use strict';
var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $stateProvider.state('Home', {
            url: '/',
            templateUrl: '/templates/home.html',
            controller: app.Controllers.HomeController,
            controllerAs: 'vm'
        }).state('Register', {
            url: '/register',
            templateUrl: '/templates/register.html',
            controller: app.Controllers.RegisterController,
            controllerAs: 'vm'
        }).state('UserProfile', {
            url: '/userProfile',
            templateUrl: '/templates/userProfile.html',
            controller: app.Controllers.userProfileController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQTJCWjtBQTNCRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQy9ELE1BQU0sQ0FBQyxVQUNSLGNBQW9DLEVBQ3BDLGlCQUF1QyxFQUN2QyxrQkFBNEM7UUFFNUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDM0IsR0FBRyxFQUFFLEdBQUc7WUFDUixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFVBQVUsRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDLGNBQWM7WUFDMUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDbkIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0I7WUFDOUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDdEIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUI7WUFDakQsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUEzQlMsR0FBRyxLQUFILEdBQUcsUUEyQloifQ==