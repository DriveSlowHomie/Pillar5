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
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.RegisterResource = $resource('/api/users/register');
                this.LoginResource = $resource('/api/users/login');
            }
            UserService.prototype.register = function (user) {
                return this.RegisterResource.save(user).$promise;
            };
            UserService.prototype.login = function (user) {
                return this.LoginResource.save(user).$promise.then(function (res) {
                    console.log("This is controller: " + user);
                });
            };
            UserService.prototype.getUser = function () {
                return this.UserResource.query();
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('app').service('userService', UserService);
        angular.module('app').service('postService', PostService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0E0Q1o7QUE1Q0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBNENyQjtJQTVDYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBQ3RCO1lBRUUscUJBQW9CLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFFeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtZQUN6RCxDQUFDO1lBRU0sOEJBQVEsR0FBZixVQUFnQixJQUFJO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFBO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQy9DLENBQUM7WUFFSCxrQkFBQztRQUFELENBQUMsQUFaRCxJQVlDO1FBWlksb0JBQVcsY0FZdkIsQ0FBQTtRQUVEO1lBb0JFLHFCQUNVLFNBQXVDO2dCQUF2QyxjQUFTLEdBQVQsU0FBUyxDQUE4QjtnQkFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO2dCQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQ3BELENBQUM7WUFuQk0sOEJBQVEsR0FBZixVQUFnQixJQUFJO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUE7WUFDbEQsQ0FBQztZQUVNLDJCQUFLLEdBQVosVUFBYSxJQUFJO2dCQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFFckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBdUIsSUFBTSxDQUFDLENBQUE7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUVNLDZCQUFPLEdBQWQ7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDbEMsQ0FBQztZQVFILGtCQUFDO1FBQUQsQ0FBQyxBQTFCRCxJQTBCQztRQTFCWSxvQkFBVyxjQTBCdkIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxFQTVDYSxRQUFRLEdBQVIsWUFBUSxLQUFSLFlBQVEsUUE0Q3JCO0FBQUQsQ0FBQyxFQTVDUyxHQUFHLEtBQUgsR0FBRyxRQTRDWiJ9