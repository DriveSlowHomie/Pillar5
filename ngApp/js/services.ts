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
    private LoginResource;
    private UserResource;

    public register(user){
      return this.RegisterResource.save(user).$promise
    }

    public login(user){
      return this.LoginResource.save(user).$promise.then((res) =>
      {
        console.log(`This is controller: ${user}`)
      });
    }

    public getUser(){
      return this.UserResource.query()
    }

    constructor(
      private $resource: ng.resource.IResourceService) {
      this.RegisterResource = $resource('/api/users/register')
      this.LoginResource = $resource('/api/users/login')
    }

  }
  angular.module('app').service('userService', UserService);
  angular.module('app').service('postService', PostService);
}
