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
            function UserProfileController($window, userService, $state) {
                this.$window = $window;
                this.userService = userService;
                this.$state = $state;
                this.userProfile = this.userService.getUser();
                console.log(this.userProfile);
                var token = this.userService.getToken();
                var userInfo = this.userService.parseJwt(token);
                console.log("" + userInfo);
            }
            UserProfileController.prototype.logout = function () {
                console.log('I am logging out');
                this.userService.deleteToken();
            };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FvTFo7QUFwTEQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBb0x4QjtJQXBMYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBVUUsd0JBQ1UsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFFckMsQ0FBQztZQVhNLDhCQUFLLEdBQVosVUFBYSxJQUFJO2dCQUFqQixpQkFLSztnQkFKRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztvQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUE7Z0JBQy9CLENBQUMsQ0FBQyxDQUFBO1lBQ0osQ0FBQztZQU9QLHFCQUFDO1FBQUQsQ0FBQyxBQWZELElBZUM7UUFmWSwwQkFBYyxpQkFlMUIsQ0FBQTtRQUVEO1lBVUUsNEJBQ2MsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDdEMsQ0FBQztZQVZHLHFDQUFRLEdBQWY7Z0JBQUEsaUJBS0s7Z0JBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUc7b0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dC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