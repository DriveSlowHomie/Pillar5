namespace app.Controllers {
  export class HomeController {


    constructor(
    ) {

    }
  }

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
    ) {

    }
  }


  export class userProfileController {

    constructor() {

    }
  }

  angular.module('app').controller('HomeController', HomeController);
}
