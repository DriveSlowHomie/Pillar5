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

  export class DiscoverService {
    public DiscoverResource;
    constructor(private $resource: ng.resource.IResourceService)
    {
       this.DiscoverResource = $resource('/api/discover/byPillar')
    }

    public discoverBy(pillarFind) {
      console.log("FROM SERVICES ", pillarFind)
      return this.DiscoverResource.query({pillar: pillarFind}).$promise;
    }

  }

  export class UserService {
    private RegisterResource;
    private LoginResource;
    private UserResource;
    private UserFeedResource;
    private EditResource;
    private ProfileResource;
    private FollowResource;
    private LikeResource;

    public status = {
      _id: null,
      email: null,
      role: null
    }

    public addLike(user){
      console.log("USER from addlike", user)
      return this.LikeResource.save(user).$promise
    }

    public register(user){
      return this.RegisterResource.save(user).$promise
    }

    public login(user){
      return this.LoginResource.save(user).$promise.then((res) =>
      {  console.log("Res token from login: ", res['token'])

        this.setToken(res['token']);
       this.setUser()
       console.log(this.status)
      });
    }

    public setUser(){
      let u = JSON.parse(this.urlBase64Decode(this.getToken().split('.')[1]));
      console.log("set user is called ", u)
      this.status._id = u._id;
      this.status.email = u.email;
      this.status.role = u.role;
    };

    public getUser(){
      return this.UserResource.query()
    }

    public getProfile(profile){
      return this.ProfileResource.query({user: 'Kanye West'})
    }

    public follow(user){
      return this.FollowResource.save().$promise
    }

    public getUserFeed(){
      return this.UserFeedResource.query(),
      console.log("Hey look at me");
    }

    public getToken () {
      return this.$window.localStorage.getItem('token')
    }

    public deleteToken(){
      console.log('I am deleting the token')
      this.$window.localStorage.setItem('token', '');
    }

    public setToken(token:string) {
      this.$window.localStorage.setItem('token', token)
    }

    public urlBase64Decode(str) {
      console.log(`This is in the decode function ${str}`)
      let output = str.replace(/-/g, '+').replace(/_/g, '/');
     switch (output.length % 4) {
       case 0: { break; }
       case 2: { output += '=='; break; }
       case 3: { output += '='; break; }
       default: {
         throw 'Illegal base64url string!';
       }
     }
     return decodeURIComponent(encodeURIComponent(this.$window.atob(output)));
    }

    public parseJwt (token) {
           var base64Url = token.split('.')[1];
           var base64 = base64Url.replace('-', '+').replace('_', '/');
           return JSON.parse(window.atob(base64));
       };
    public editUser(newInfo){
      console.log(newInfo)
      return this.EditResource.save(newInfo).$promise
    }

    constructor(
      private $window: ng.IWindowService,
      private $resource: ng.resource.IResourceService) {
      this.RegisterResource = $resource('/api/users/register')
      this.LoginResource = $resource('/api/users/login')
      this.UserResource = $resource('/api/users/userProfile')
      this.ProfileResource = $resource('/api/users/profile')
      this.FollowResource = $resource('/api/users/follow')
      this.UserFeedResource = $resource('/api/users/userFeed')
      this.EditResource = $resource('/api/users/editProfile')
      this.LikeResource = $resource('/api/users/likeProfile')
    }

  }
  angular.module('app').service('discoverService', DiscoverService);
  angular.module('app').service('userService', UserService);
  angular.module('app').service('postService', PostService);
}
