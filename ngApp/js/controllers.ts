namespace app.Controllers {

  export class HomeController {
    public user;

    public facebook(){
      console.log("CONTROLLER FACEBOOK YES")
      this.userService.facebook();
    }

    public login(){
        console.log(this.user)
            this.userService.login(this.user).then((res) => {
            // console.log("from login res ", res);
            this.$state.go('UserProfile')
          })
        }

    constructor(
      private userService: app.Services.UserService,
      private $state: ng.ui.IStateService
    ) {
    }
  }

  export class RegisterController {
    public user;

    public register(){
          this.userService.register(this.user).then((res) => {
            console.log("from register res ", res);
            this.$state.go('UserProfile')
          })
        }

    constructor(
          private userService: app.Services.UserService,
          private $state: ng.ui.IStateService
    ) {}
  }

  export class UploadController {
    public file;
    public productToSave;
    public pillar;
    public description;
    public region;

    constructor(
      private filepickerService,
      private $scope: ng.IScope,
      private postService: app.Services.PostService,
      private $state: ng.ui.IStateService
    ) {}

    public pickFile() {
      this.filepickerService.pick({
        mimetype: 'image/*'
      }, this.fileUploaded.bind(this));

    }

    public fileUploaded(file) {
      this.file = file;
      console.log(file)
      console.log(file.url);
      this.productToSave = {};
      this.productToSave.url = file.url;
      this.productToSave.description = this.description;
      this.productToSave.pillar = this.pillar;
      this.productToSave.region = this.region;

      // this.productToSave.user = ;
      // this.productToSave.comments = ;
      console.log("file URL", file.url)
      console.log("productToSave", this.productToSave)
      this.postService.savePost(this.productToSave)
    }
  }


  export class UserProfileController {
    public userProfile

    public logout(){
      console.log('I am logging out')
      this.userService.deleteToken()
      this.$state.go('Register')
    }


    // public profile() {
    //     this.userProfile = this.userService.getUser()
    // }

    constructor(
      private $window: ng.IWindowService,
      private userService: app.Services.UserService,
      private $state: ng.ui.IStateService
    ) {
      this.userProfile = this.userService.getUser()
      console.log(this.userProfile)
      let token = this.userService.getToken()
      console.log(token, "token From page load")
      // let userInfo = this.userService.parseJwt(token)
      var payload = window.atob(window.localStorage['token'].split('.')[1])

      console.log(`${payload}`)
    }
  }

  export class ProfileController {
    public profile;
    public user;


    public follow(){
      let token = this.userService.getToken()
      let payload = JSON.parse(window.atob(token.split('.')[1]));
      console.log(payload.email, this.profile[0].email)
      this.userService.follow(payload.email, this.profile[0].email)
    }

    constructor(
      private $stateParams: ng.ui.IStateParamsService,
      private userService: app.Services.UserService,
      private $state: ng.ui.IStateService
    ) {
      console.log(`${this.$stateParams['user']}`)
      this.user = this.$stateParams['user'];
      this.profile = this.userService.getProfile(this.user)
      console.log(`Stateparams ${this.profile}`)
    }
  }

  export class EditProfileController {
    public userProfile
    public editedProfile
    public image;
    public description;
    public tag;

    public editProfile() {
      this.editedProfile = {};
      this.editedProfile.image = this.image;
      this.editedProfile.description = this.description;
      this.editedProfile.tag = this.tag;
      console.log("from controller ", this.editedProfile);
      this.userService.editUser(this.editedProfile)
      this.$state.go('UserProfile')
    }

    constructor(
      private userService: app.Services.UserService,
      private $state: ng.ui.IStateService
    ) {
      this.userProfile = this.userService.getUser()
      console.log(this.userProfile)}
  }

  export class UserFeedController {
    public userFeeds;

    constructor(
      private userService: app.Services.UserService,
      private $state: ng.ui.IStateService
    ) {
      this.userFeeds = this.userService.getUserFeed()
      console.log("netgear sucks")}
  }


  export class DiscoverController {
    public pillar;
    public posts;
    public user;

    public discover(pillar){
            this.discoverService.discoverBy(this.pillar).then((res) => {
            console.log(`this is ${this.pillar}`);
            console.log(res);
            this.posts = res;
          })
        }
    public like () {
      this.user = "123"
      console.log("user from LIKE function: ", this.user)

      this.userService.addLike(this.user).then((res) => {
        console.log("res from LIKE function: ", res)
      })
    }

    constructor(
      private userService: app.Services.UserService,
      private discoverService: app.Services.DiscoverService,
      private $state: ng.ui.IStateService
    ) {}
  }

  angular.module('app').controller('HomeController', HomeController);
}
