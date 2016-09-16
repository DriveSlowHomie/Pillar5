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
            }
            UserService.prototype.register = function (user) {
                return this.RegisterResource.save(user).$promise;
            };
            UserService.prototype.login = function (user) {
                var _this = this;
                return this.LoginResource.save(user).$promise.then(function (res) {
                    _this.setToken(res['token']);
                    console.log("This is service: " + user);
                });
            };
            UserService.prototype.getUser = function () {
                return this.UserResource.query();
            };
            UserService.prototype.getProfile = function (profile) {
                return this.ProfileResource.query({ user: 'Kanye West' });
            };
            UserService.prototype.follow = function (user) {
                return this.FollowResource.save().$promise;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FxSVo7QUFySUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBcUlyQjtJQXJJYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBRUUscUJBQW9CLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtZQUN6RCxDQUFDO1lBRU0sOEJBQVEsR0FBZixVQUFnQixJQUFJO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9DLENBQUM7WUFFSCxrQkFBQztRQUFELENBQUMsQUFaRCxJQVlDO1FBWlksb0JBQVcsY0FZdkIsQ0FBQTtRQUVEO1lBRUUseUJBQW9CLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFeEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBQzlELENBQUM7WUFFTSxvQ0FBVSxHQUFqQixVQUFrQixVQUFVO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFBO2dCQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNwRSxDQUFDO1lBRUgsc0JBQUM7UUFBRCxDQUFDLEFBWkQsSUFZQztRQVpZLHdCQUFlLGtCQVkzQixDQUFBO1FBRUQ7WUF3RkUscUJBQ1UsT0FBMEIs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