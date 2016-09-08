namespace app.Services {
  export class PostService {
    public PostResource;
    constructor(private $resource: ng.resource.IResourceService)
    {
       this.PostResource = $resource('/api/posts/fileUpload')
    }

    public savePost(file) {
      console.log("FROM SERVICES ", file)
      return this.PostResource.save(file).$promise;
    }

  }

  export class UserService {
    private RegisterResource;
    private UserResource;

    public register(user){
      return this.RegisterResource.save(user).$promise
    }

    public getUser(){
      return this.UserResource.query()
    }

    constructor(
      private $resource: ng.resource.IResourceService) {
      this.RegisterResource = $resource('/api/users/register')
    }

  }
  angular.module('app').service('userService', UserService);
  angular.module('app').service('postService', PostService);
}
