var app;
(function (app) {
    var Services;
    (function (Services) {
        var PostService = (function () {
            function PostService($resource) {
                this.$resource = $resource;
                this.PostResource = $resource('/api/posts/fileUpload');
            }
            PostService.prototype.savePost = function (file) {
                console.log("FROM SERVICES ", file);
                return this.PostResource.save(file).$promise;
            };
            return PostService;
        }());
        Services.PostService = PostService;
        var DiscoverService = (function () {
            function DiscoverService($resource) {
                this.$resource = $resource;
                this.DiscoverResource = $resource('/api/discover/byPillar');
            }
            DiscoverService.prototype.discoverBy = function (pillarFind) {
                console.log("FROM SERVICES ", pillarFind);
                return this.DiscoverResource.query({ pillar: pillarFind }).$promise;
            };
            return DiscoverService;
        }());
        Services.DiscoverService = DiscoverService;
        var UserService = (function () {
            function UserService($window, $resource) {
                this.$window = $window;
                this.$resource = $resource;
                this.status = {
                    _id: null,
                    email: null,
                    role: null
                };
                this.RegisterResource = $resource('/api/users/register');
                this.LoginResource = $resource('/api/users/login');
                this.UserResource = $resource('/api/users/userProfile');
                this.UserFeedResource = $resource('/api/users/userFeed');
                this.EditResource = $resource('/api/users/editProfile');
            }
            UserService.prototype.register = function (user) {
                return this.RegisterResource.save(user).$promise;
            };
            UserService.prototype.login = function (user) {
                var _this = this;
                return this.LoginResource.save(user).$promise.then(function (res) {
                    _this.setToken(res['token']);
                    _this.setUser();
                    console.log("This is service: " + user);
                });
            };
            UserService.prototype.setUser = function () {
                var u = JSON.parse(this.urlBase64Decode(this.getToken().split('.')[1]));
                this.status._id = u._id;
                this.status.email = u.email;
                this.status.role = u.role;
            };
            ;
            UserService.prototype.getUser = function () {
                return this.UserResource.query();
            };
            UserService.prototype.getUserFeed = function () {
                return this.UserFeedResource.query(),
                    console.log("Hey look at me");
            };
            UserService.prototype.getToken = function () {
                return this.$window.localStorage.getItem('token');
            };
            UserService.prototype.setToken = function (token) {
                this.$window.localStorage.setItem('token', token);
            };
            UserService.prototype.urlBase64Decode = function (str) {
                var output = str.replace(/-/g, '+').replace(/_/g, '/');
                switch (output.length % 4) {
                    case 0: {
                        break;
                    }
                    case 2: {
                        output += '==';
                        break;
                    }
                    case 3: {
                        output += '=';
                        break;
                    }
                    default: {
                        throw 'Illegal base64url string!';
                    }
                }
                return decodeURIComponent(encodeURIComponent(this.$window.atob(output)));
            };
            UserService.prototype.editUser = function (newInfo) {
                console.log(newInfo);
                return this.EditResource.save(newInfo).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('app').service('discoverService', DiscoverService);
        angular.module('app').service('userService', UserService);
        angular.module('app').service('postService', PostService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
