namespace app.Controllers {

  export class HomeController {
    constructor() {}
  }

  export class RegisterController {
    public user;

    public register(){
          this.userService.register(this.user).then((res) => {
            console.log(res);
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
      private postService: app.Services.PostService
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

    public profile() {
        this.userProfile= this.userService.getUser()
    }

    constructor(
      private userService: app.Services.UserService,
      private $state: ng.ui.IStateService
    ) {}
  }

  angular.module('app').controller('HomeController', HomeController);
}
