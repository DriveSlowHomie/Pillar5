namespace app.Services {

  export class UserService {
    private RegisterResource;

    public register(user){
      return this.RegisterResource.save(user).$promise
    }


    constructor(
      private $resource: ng.resource.IResourceService) {
      this.RegisterResource = $resource('/api/users/register')
    }


  }
  angular.module('app').service('userService', UserService);
}
