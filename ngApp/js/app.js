'use strict';
var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, filepickerProvider) {
        filepickerProvider.setKey('A1MTKkvVrQiiwPBQaLWoZz');
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
            controller: app.Controllers.UserProfileController,
            controllerAs: 'vm'
        }).state('Upload', {
            url: '/upload',
            templateUrl: '/templates/upload.html',
            controller: app.Controllers.UploadController,
            controllerAs: 'vm'
        }).state('EditProfile', {
            url: '/editProfile',
            templateUrl: '/templates/editProfile.html',
            controller: app.Controllers.EditProfileController,
        }).state('UserFeed', {
            url: '/userFeed',
            templateUrl: '/templates/userFeed.html',
            controller: app.Controllers.UserFeedController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('AuthInterceptor');
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQThDWjtBQTlDRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3JGLE1BQU0sQ0FBQyxVQUNSLGNBQW9DLEVBQ3BDLGlCQUF1QyxFQUN2QyxrQkFBNEMsRUFDNUMsYUFBK0IsRUFDL0Isa0JBQWtCO1FBRWxCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRXBELGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ25CLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsa0JBQWtCO1lBQzlDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3RCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMscUJBQXFCO1lBQ2pELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0I7WUFDNUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDdEIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxxQkFBcUI7U0FDbEQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7WUFDbkIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsV0FBVyxFQUFFLDBCQUEwQjtZQUN2QyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0I7WUFDOUMsWUFBWSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxhQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxFQTlDUyxHQUFHLEtBQUgsR0FBRyxRQThDWiJ9