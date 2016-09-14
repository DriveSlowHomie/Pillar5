var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
            }
            HomeController.prototype.login = function (user) {
                var _this = this;
                this.userService.login(this.user).then(function (res) {
                    console.log(res);
                    _this.$state.go('UserProfile');
                });
            };
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
                    _this.$state.go('UserProfile');
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
            function UserProfileController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
                this.userProfile = this.userService.getUser();
                console.log(this.userProfile);
            }
            UserProfileController.prototype.profile = function () {
                this.userProfile = this.userService.getUser();
            };
            return UserProfileController;
        }());
        Controllers.UserProfileController = UserProfileController;
        var EditProfileController = (function () {
            function EditProfileController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
                this.userProfile = this.userService.getUser();
                console.log(this.userProfile);
            }
            EditProfileController.prototype.editProfile = function () {
                this.editedProfile = {};
                this.editedProfile.image = this.image;
                this.editedProfile.description = this.description;
                this.editedProfile.tag = this.tag;
                console.log("from controller ", this.editedProfile);
                this.userService.editUser(this.editedProfile);
                this.$state.go('UserProfile');
            };
            return EditProfileController;
        }());
        Controllers.EditProfileController = EditProfileController;
        var UserFeedController = (function () {
            function UserFeedController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
                this.userFeeds = this.userService.getUserFeed();
                console.log("netgear sucks");
            }
            return UserFeedController;
        }());
        Controllers.UserFeedController = UserFeedController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0E2SFo7QUE3SEQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBNkh4QjtJQTdIYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBVUUsd0JBQ1UsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDbEMsQ0FBQztZQVZHLDhCQUFLLEdBQVosVUFBYSxJQUFJO2dCQUFqQixpQkFLSztnQkFKRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQy9CLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQU1QLHFCQUFDO1FBQUQsQ0FBQyxBQWRELElBY0M7UUFkWSwwQkFBYyxpQkFjMUIsQ0FBQTtRQUVEO1lBVUUsNEJBQ2MsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDdEMsQ0FBQztZQVZHLHFDQUFRLEdBQWY7Z0JBQUEsaUJBS0s7Z0JBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dC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