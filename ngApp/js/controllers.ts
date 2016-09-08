namespace app.Controllers {
  export class RegisterController {
    public user;

    public register(){
          this.userService.register(this.user).then((res) => {
            console.log(res);
            this.$state.go('Home')
          })
        }

    constructor(
          private userService: app.Services.UserService,
          private $state: ng.ui.IStateService
    ) {}
  }

  export class HomeController {
    public file;
    public productToSave;

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
      console.log("productToSave", this.productToSave)
      this.productToSave = {};
      this.productToSave.url = file.url;
      // this.productToSave.description = ;
      // this.productToSave.comments = ;
      // this.productToSave.pillar = ;
      // this.productToSave.region = ;
      // this.productToSave.user = ;
      console.log("file URL", file.url)
      console.log("productToSave", this.productToSave)
      this.postService.savePost(this.productToSave)
    }
  }


  export class userProfileController {
    constructor() {}
  }

  angular.module('app').controller('HomeController', HomeController);
}
