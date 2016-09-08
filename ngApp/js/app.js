'use strict';
var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker'])
        .config(function ($stateProvider, $locationProvider, $urlRouterProvider, filepickerProvider) {
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
            controller: app.Controllers.userProfileController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLElBQVUsR0FBRyxDQThCWjtBQTlCRCxXQUFVLEdBQUcsRUFBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3JGLE1BQU0sQ0FBQyxVQUNSLGNBQW9DLEVBQ3BDLGlCQUF1QyxFQUN2QyxrQkFBNEMsRUFDNUMsa0JBQWtCO1FBRWxCLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRXBELGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQzNCLEdBQUcsRUFBRSxHQUFHO1lBQ1IsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjO1lBQzFDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ25CLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsa0JBQWtCO1lBQzlDLFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3RCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMscUJBQXFCO1lBQ2pELFlBQVksRUFBRSxJQUFJO1NBQ25CLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLEVBOUJTLEdBQUcsS0FBSCxHQUFHLFFBOEJaIn0=