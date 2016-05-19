// posts service //factory used as a data store
angular.module('redditClone')
.factory('posts','$http',[function($http){
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
  o.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
    });
  };
  return o;
}])
