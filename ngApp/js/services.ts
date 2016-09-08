namespace app.Services {
  export class PostService {
    public PostResource;
    constructor(private $resource: ng.resource.IResourceService)
    {
       this.PostResource = $resource('/api/post/postRoute')
    }

    public savePost(file) {
      console.log("FROM SERVICES ", file)
      return this.PostResource.save(file).$promise;
    }

  }

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
  angular.module('app').service('postService', PostService);
}
