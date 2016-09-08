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
        var UploadController = (function () {
            function UploadController(filepickerService, $scope, postService) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.postService = postService;
            }
            UploadController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            UploadController.prototype.fileUploaded = function (file) {
                this.file = file;
                console.log(file);
                console.log(file.url);
                this.productToSave = {};
                this.productToSave.url = file.url;
                this.productToSave.description = this.description;
                this.productToSave.pillar = this.pillar;
                this.productToSave.region = this.region;
                console.log("file URL", file.url);
                console.log("productToSave", this.productToSave);
                this.postService.savePost(this.productToSave);
            };
            return UploadController;
        }());
        Controllers.UploadController = UploadController;
        var UserProfileController = (function () {
            function UserProfileController() {
            }
            return UserProfileController;
        }());
        Controllers.UserProfileController = UserProfileController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FrRVo7QUFsRUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBa0V4QjtJQWxFYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBQ0U7WUFBZSxDQUFDO1lBQ2xCLHFCQUFDO1FBQUQsQ0FBQyxBQUZELElBRUM7UUFGWSwwQkFBYyxpQkFFMUIsQ0FBQTtRQUVEO1lBVUUsNEJBQ2MsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDdEMsQ0FBQztZQVZHLHFDQUFRLEdBQWY7Z0JBQUEsaUJBS0s7Z0JBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN4QixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUM7WUFNUCx5QkFBQztRQUFELENBQUMsQUFkRCxJQWNDO1FBZFksOEJBQWtCLHFCQWM5QixDQUFBO1FBRUQ7WUFPRSwwQkFDVSxpQkFBaUIsRUFDakIsTUFBaUIsRUFDakIsV0FBcUM7Z0JBRnJDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBQTtnQkFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztnQkFDakIsZ0JBQVcsR0FBWCxXQUFXLENBQTBCO1lBQzVDLENBQUM7WUFFRyxtQ0FBUSxHQUFmO2dCQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLFFBQVEsRUFBRSxTQUFTO2lCQUNwQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFbkMsQ0FBQztZQUVNLHVDQUFZLEdBQW5CLFVBQW9CLElBQUk7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBSXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDL0MsQ0FBQztZQUNILHVCQUFDO1FBQUQsQ0FBQyxBQXBDRCxJQW9DQztRQXBDWSw0QkFBZ0IsbUJBb0M1QixDQUFBO1FBR0Q7WUFDRTtZQUFlLENBQUM7WUFDbEIsNEJBQUM7UUFBRCxDQUFDLEFBRkQsSUFFQztRQUZZLGlDQUFxQix3QkFFakMsQ0FBQTtRQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ3JFLENBQUMsRUFsRWEsV0FBVyxHQUFYLGVBQVcsS0FBWCxlQUFXLFFBa0V4QjtBQUFELENBQUMsRUFsRVMsR0FBRyxLQUFILEdBQUcsUUFrRVoifQ==