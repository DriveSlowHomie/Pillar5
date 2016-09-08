var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var RegisterController = (function () {
            function RegisterController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
            }
            RegisterController.prototype.register = function () {
                var _this = this;
                this.userService.register(this.user).then(function (res) {
                    console.log(res);
                    _this.$state.go('Home');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var userProfileController = (function () {
            function userProfileController() {
            }
            return userProfileController;
        }());
        Controllers.userProfileController = userProfileController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FzQ1o7QUF0Q0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBc0N4QjtJQXRDYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBR0U7WUFHQSxDQUFDO1lBQ0gscUJBQUM7UUFBRCxDQUFDLEFBUEQsSUFPQztRQVBZLDBCQUFjLGlCQU8xQixDQUFBO1FBRUQ7WUFXRSw0QkFDYyxXQUFxQyxFQUNyQyxNQUEyQjtnQkFEM0IsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO2dCQUNyQyxXQUFNLEdBQU4sTUFBTSxDQUFxQjtZQUd6QyxDQUFDO1lBYk0scUNBQVEsR0FBZjtnQkFBQSxpQkFLSztnQkFKQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQVNQLHlCQUFDO1FBQUQsQ0FBQyxBQWpCRCxJQWlCQztRQWpCWSw4QkFBa0IscUJBaUI5QixDQUFBO1FBR0Q7WUFFRTtZQUVBLENBQUM7WUFDSCw0QkFBQztRQUFELENBQUMsQUFMRCxJQUtDO1FBTFksaUNBQXFCLHdCQUtqQyxDQUFBO1FBRUQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQyxFQXRDYSxXQUFXLEdBQVgsZUFBVyxLQUFYLGVBQVcsUUFzQ3hCO0FBQUQsQ0FBQyxFQXRDUyxHQUFHLEtBQUgsR0FBRyxRQXNDWiJ9