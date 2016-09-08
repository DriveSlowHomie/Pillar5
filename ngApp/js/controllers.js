var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
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
        var HomeController = (function () {
            function HomeController(filepickerService, $scope, postService) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.postService = postService;
            }
            HomeController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            HomeController.prototype.fileUploaded = function (file) {
                this.file = file;
                console.log(file);
                console.log(file.url);
                console.log("productToSave", this.productToSave);
                this.productToSave = {};
                this.productToSave.url = file.url;
                console.log("file URL", file.url);
                console.log("productToSave", this.productToSave);
                this.postService.savePost(this.productToSave);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var userProfileController = (function () {
            function userProfileController() {
            }
            return userProfileController;
        }());
        Controllers.userProfileController = userProfileController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0EwRFo7QUExREQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBMER4QjtJQTFEYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBQ3pCO1lBVUUsNEJBQ2MsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDdEMsQ0FBQztZQVZHLHFDQUFRLEdBQWY7Z0JBQUEsaUJBS0s7Z0JBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN4QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFNUCx5QkFBQztRQUFELENBQUMsQUFkRCxJQWNDO1FBZFksOEJBQWtCLHFCQWM5QixDQUFBO1FBRUQ7WUFJRSx3QkFDVSxpQkFBaUIsRUFDakIsTUFBaUIsRUFDakIsV0FBcUM7Z0JBRnJDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBQTtnQkFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztnQkFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO1lBQzVDLENBQUM7WUFFRyxpQ0FBUSxHQUFmO2dCQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLFFBQVEsRUFBRSxTQUFTO2lCQUNwQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFbkMsQ0FBQztZQUVNLHFDQUFZLEdBQW5CLFVBQW9CLElBQUk7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFNbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQ2hELElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUMvQyxDQUFDO1lBQ0gscUJBQUM7UUFBRCxDQUFDLEFBakNELElBaUNDO1FBakNZLDBCQUFjLGlCQWlDMUIsQ0FBQTtRQUdEO1lBQ0U7WUFBZSxDQUFDO1lBQ2xCLDRCQUFDO1FBQUQsQ0FBQyxBQUZELElBRUM7UUFGWSxpQ0FBcUIsd0JBRWpDLENBQUE7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDLEVBMURhLFdBQVcsR0FBWCxlQUFXLEtBQVgsZUFBVyxRQTBEeEI7QUFBRCxDQUFDLEVBMURTLEdBQUcsS0FBSCxHQUFHLFFBMERaIn0=