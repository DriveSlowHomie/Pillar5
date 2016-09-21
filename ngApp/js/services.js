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
                this.ProfileResource = $resource('/api/users/profile');
                this.FollowResource = $resource('/api/users/follow');
                this.UserFeedResource = $resource('/api/users/userFeed');
                this.EditResource = $resource('/api/users/editProfile');
                this.LikeResource = $resource('/api/users/likeProfile');
                this.FacebookResource = $resource('/api/users/facebook');
            }
            UserService.prototype.facebook = function () {
                console.log("SERVICE FACEBOOK YES");
                this.FacebookResource.query();
            };
            UserService.prototype.addLike = function (user) {
                console.log("USER from addlike", user);
                return this.LikeResource.save(user).$promise;
            };
            UserService.prototype.register = function (user) {
                return this.RegisterResource.save(user).$promise;
            };
            UserService.prototype.login = function (user) {
                var _this = this;
                console.log("USER FROM SERVICE LOGIN", user);
                return this.LoginResource.save(user).$promise.then(function (res) {
                    console.log("Res token from login: ", res['token']);
                    _this.setToken(res['token']);
                    _this.setUser();
                    console.log(_this.status);
                });
            };
            UserService.prototype.setUser = function () {
                var u = JSON.parse(this.urlBase64Decode(this.getToken().split('.')[1]));
                console.log("set user is called ", u);
                this.status._id = u._id;
                this.status.email = u.email;
                this.status.role = u.role;
            };
            ;
            UserService.prototype.getUser = function () {
                return this.UserResource.query();
            };
            UserService.prototype.getProfile = function (profile) {
                return this.ProfileResource.query({ name: profile });
            };
            UserService.prototype.follow = function (follower, following) {
                console.log({ follower: follower, following: following });
                return this.FollowResource.save({ follower: follower, following: following }).$promise;
            };
            UserService.prototype.getUserFeed = function () {
                return this.UserFeedResource.query(),
                    console.log("Hey look at me");
            };
            UserService.prototype.getToken = function () {
                return this.$window.localStorage.getItem('token');
            };
            UserService.prototype.deleteToken = function () {
                console.log('I am deleting the token');
                this.$window.localStorage.setItem('token', '');
            };
            UserService.prototype.setToken = function (token) {
                this.$window.localStorage.setItem('token', token);
            };
            UserService.prototype.urlBase64Decode = function (str) {
                console.log("This is in the decode function " + str);
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
            UserService.prototype.parseJwt = function (token) {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace('-', '+').replace('_', '/');
                return JSON.parse(window.atob(base64));
            };
            ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0F5Slo7QUF6SkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBeUpyQjtJQXpKYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBRUUscUJBQW9CLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtZQUN6RCxDQUFDO1lBRU0sOEJBQVEsR0FBZixVQUFnQixJQUFJO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9DLENBQUM7WUFFSCxrQkFBQztRQUFELENBQUMsQUFaRCxJQVlDO1FBWlksb0JBQVcsY0FZdkIsQ0FBQTtRQUVEO1lBRUUseUJBQW9CLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBQzlELENBQUM7WUFFTSxvQ0FBVSxHQUFqQixVQUFrQixVQUFVO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNwRSxDQUFDO1lBRUgsc0JBQUM7UUFBRCxDQUFDLEFBWkQsSUFZQztRQVpZLHdCQUFlLGtCQVkzQixDQUFBO1FBRUQ7WUEwR0UscUJBQ1UsT0FBMEIs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