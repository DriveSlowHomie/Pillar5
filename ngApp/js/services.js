var app;
(function (app) {
    var Services;
    (function (Services) {
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.RegisterResource = $resource('/api/users/register');
            }
            UserService.prototype.register = function (user) {
                return this.RegisterResource.save(user).$promise;
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module('app').service('userService', UserService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FrQlo7QUFsQkQsV0FBVSxHQUFHO0lBQUMsSUFBQSxRQUFRLENBa0JyQjtJQWxCYSxXQUFBLFFBQVEsRUFBQyxDQUFDO1FBRXRCO1lBUUUscUJBQ1UsU0FBdUM7Z0JBQXZDLGNBQVMsR0FBVCxTQUFTLENBQThCO2dCQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUE7WUFDMUQsQ0FBQztZQVJNLDhCQUFRLEdBQWYsVUFBZ0IsSUFBSTtnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFBO1lBQ2xELENBQUM7WUFTSCxrQkFBQztRQUFELENBQUMsQUFkRCxJQWNDO1FBZFksb0JBQVcsY0FjdkIsQ0FBQTtRQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDLEVBbEJhLFFBQVEsR0FBUixZQUFRLEtBQVIsWUFBUSxRQWtCckI7QUFBRCxDQUFDLEVBbEJTLEdBQUcsS0FBSCxHQUFHLFFBa0JaIn0=