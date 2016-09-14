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
        }).state('Discover', {
            url: '/discover',
            templateUrl: '/templates/discover.html',
            controller: app.Controllers.DiscoverController,
            controllerAs: 'vm'
        });
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('AuthInterceptor');
    });
})(app || (app = {}));
