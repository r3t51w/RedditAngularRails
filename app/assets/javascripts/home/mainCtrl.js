//MainCtrl
angular.module('redditClone')
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
      posts.create({
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
    posts.upvote(post);
  };
}]);
