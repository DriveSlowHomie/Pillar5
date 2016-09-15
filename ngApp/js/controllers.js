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
            return UserProfileController;
        }());
        Controllers.UserProfileController = UserProfileController;
        var ProfileController = (function () {
            function ProfileController($stateParams, userService, $state) {
                this.$stateParams = $stateParams;
                this.userService = userService;
                this.$state = $state;
                console.log("" + this.$stateParams);
                this.user = this.$stateParams['profile'];
                this.profile = this.userService.getProfile(this.user);
                console.log("Stateparams " + this.profile);
            }
            return ProfileController;
        }());
        Controllers.ProfileController = ProfileController;
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
        var DiscoverController = (function () {
            function DiscoverController(discoverService, $state) {
                this.discoverService = discoverService;
                this.$state = $state;
            }
            DiscoverController.prototype.discover = function (pillar) {
                var _this = this;
                this.discoverService.discoverBy(this.pillar).then(function (res) {
                    console.log("this is " + _this.pillar);
                    console.log(res);
                    _this.posts = res;
                });
            };
            return DiscoverController;
        }());
        Controllers.DiscoverController = DiscoverController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FvS1o7QUFwS0QsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBb0t4QjtJQXBLYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBVUUsd0JBQ1UsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDbEMsQ0FBQztZQVZHLDhCQUFLLEdBQVosVUFBYSxJQUFJO2dCQUFqQixpQkFLSztnQkFKRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQy9CLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQU1QLHFCQUFDO1FBQUQsQ0FBQyxBQWRELElBY0M7UUFkWSwwQkFBYyxpQkFjMUIsQ0FBQTtRQUVEO1lBVUUsNEJBQ2MsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDdEMsQ0FBQztZQVZHLHFDQUFRLEdBQWY7Z0JBQUEsaUJBS0s7Z0JBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dC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