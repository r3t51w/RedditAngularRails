// posts service //factory used as a data store
angular.module('redditClone')
.factory('posts',['$http',function($http){
  var o={
    posts:[]
    /*posts: [
      {title: "Post 1", upvotes: 10, comments:[]},
      {title: "Post 2", upvotes: 7, comments:[]},
      {title: "Post 3", upvotes: 9, comments:[]},
      {title: "Post 4", upvotes: 11, comments:[]},
      {title: "Post 5", upvotes: 6, comments:[]},
      {title: "Post 6", upvotes: 3, comments:[]},
      {title: "Post 7", upvotes: 5, comments:[]}
    ]*/
  };
  o.getAll = function(){
    return $http.get('/posts.json').success(function(data){
      angular.copy(data, o.posts);
      //console.log(data);
    });
  };
  o.create = function(post){
    console.log(post);
    return $http.post('/posts.json',post).success(function(data){
      console.log(data);
      o.posts.push(data);
    });
  };
  o.upvote= function(post){
    return $http.put('/posts/'+ post.id +'/upvote.json').success(function(data){
      post.upvotes+=1;
    });
  };
  o.get = function(id){
    return $http.get('/posts/'+id+'.json').then(function(res){
      return res.data;
    });
  };
  o.addComment = function(id, comment){
    return $http.post('/posts/'+id+'/comments.json', comment);
  };

  o.upvoteComment = function(post, comment){
    return $http.put('/posts/'+post.id+'/comments/'+comment.id+'/upvote.json')
    .success(function(){
      comment.upvotes +=1;
    });
  };
  return o;
}])
