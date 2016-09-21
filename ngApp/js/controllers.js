var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(userService, $state) {
                this.userService = userService;
                this.$state = $state;
            }
            HomeController.prototype.facebook = function () {
                console.log("CONTROLLER FACEBOOK YES");
                this.userService.facebook();
            };
            HomeController.prototype.login = function () {
                var _this = this;
                console.log(this.user);
                this.userService.login(this.user).then(function (res) {
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
                    console.log("from register res ", res);
                    _this.$state.go('UserProfile');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var UploadController = (function () {
            function UploadController(filepickerService, $scope, postService, $state) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.postService = postService;
                this.$state = $state;
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
                console.log(token, "token From page load");
                var payload = window.atob(window.localStorage['token'].split('.')[1]);
                console.log("" + payload);
            }
            UserProfileController.prototype.logout = function () {
                console.log('I am logging out');
                this.userService.deleteToken();
                this.$state.go('Register');
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
            ProfileController.prototype.follow = function () {
                var token = this.userService.getToken();
                var payload = JSON.parse(window.atob(token.split('.')[1]));
                console.log(payload.email, this.profile[0].email);
                this.userService.follow(payload.email, this.profile[0].email);
            };
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
            function DiscoverController(userService, discoverService, $state) {
                this.userService = userService;
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
            DiscoverController.prototype.like = function () {
                this.user = "123";
                console.log("user from LIKE function: ", this.user);
                this.userService.addLike(this.user).then(function (res) {
                    console.log("res from LIKE function: ", res);
                });
            };
            return DiscoverController;
        }());
        Controllers.DiscoverController = DiscoverController;
        angular.module('app').controller('HomeController', HomeController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0F5TVo7QUF6TUQsV0FBVSxHQUFHO0lBQUMsSUFBQSxXQUFXLENBeU14QjtJQXpNYSxXQUFBLFdBQVcsRUFBQyxDQUFDO1FBRXpCO1lBZ0JFLHdCQUNVLFdBQXFDLEVBQ3JDLE1BQTJCO2dCQUQzQixnQkFBVyxHQUFYLFdBQVcsQ0FBMEI7Z0JBQ3JDLFdBQU0sR0FBTixNQUFNLENBQXFCO1lBRXJDLENBQUM7WUFqQk0saUNBQVEsR0FBZjtnQkFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7Z0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDOUIsQ0FBQztZQUVNLDhCQUFLLEdBQVo7Z0JBQUEsaUJBTUs7Z0JBTEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7Z0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO29CQUUzQyxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQTtnQkFDL0IsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1lBT1AscUJBQUM7UUFBRCxDQUFDLEFBckJELElBcUJDO1FBckJZLDBCQUFjLGlCQXFCMUIsQ0FBQTtRQUVEO1lBVUUsNEJBQ2MsV0FBcUMsRUFDckMsTUFBMkI7Z0JBRDNCLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtnQkFDckMsV0FBTSxHQUFOLE1BQU0sQ0FBcUI7WUFDdEMsQ0FBQztZQVZHLHFDQUFRLEdBQWY7Z0JBQUEsaUJBS0s7Z0JBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFD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