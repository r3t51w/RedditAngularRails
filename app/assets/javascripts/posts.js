angular.module('redditClone',['ui.router','templates'])
//routing instructions
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl:'/home.html',
      controller:'MainCtrl'
    })
    .state('posts',{
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostsCtrl'
    });
  $urlRouterProvider.otherwise('home');
}])
//factory used as a data store
.factory('posts', [function(){
  var o={
    posts: [
      {title: "Post 1", upvotes: 10, comments:[]},
      {title: "Post 2", upvotes: 7, comments:[]},
      {title: "Post 3", upvotes: 9, comments:[]},
      {title: "Post 4", upvotes: 11, comments:[]},
      {title: "Post 5", upvotes: 6, comments:[]},
      {title: "Post 6", upvotes: 3, comments:[]},
      {title: "Post 7", upvotes: 5, comments:[]}
    ]
  };
  return o;
}])
//Controller for main page
.controller('MainCtrl',[
'$scope','posts',
function($scope,posts){
  $scope.test = "Post List";
  $scope.posts = posts.posts
  /*[
  //sample data
    {title: "Post 1", upvotes: 10},
    {title: "Post 2", upvotes: 7},
    {title: "Post 3", upvotes: 9},
    {title: "Post 4", upvotes: 11},
    {title: "Post 5", upvotes: 6},
    {title: "Post 6", upvotes: 3},
    {title: "Post 7", upvotes: 5}
  ]*/;
  $scope.addPost = function(){
    if(!$scope.title || $scope.title === ""){return;}
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link,
        comments: [
          {author: 'Tom', body:'That sounds about right', upvotes: 0},
          {author: 'Doe', body: 'Great idea!', upvotes: 0}
        ]
      });
      $scope.title='';
      $scope.link='';
  };
  $scope.incrementUpvotes= function(post){
    post.upvotes += 1;
  };
}])
// Post Controller
.controller('PostsCtrl',[
  '$scope',
  '$stateParams',
  'posts',
  function($scope, $stateParams, posts){
    $scope.post= posts.posts[$stateParams.id];
    $scope.addComment= function(){
      if($scope.body ===''){return;}
      $scope.post.comments.push({
        body: $scope.body,
        author: 'user',
        upvotes:0
      });
      $scope.body='';
    };
    $scope.incrementUpvotes=function(comment){
      comment.upvotes+=1;
    }
}])
