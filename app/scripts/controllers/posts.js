'use strict';

app.controller('PostsCtrl', function ($scope) {
  // array that holds our posts that were entered into our form
  $scope.posts = [];
  // post consists of two attributes
  $scope.post = {url: 'http://', title: ''};

  // this will add 'post' object into 'posts' array
  $scope.submitPost = function() {
  	$scope.posts.push($scope.post);
  	$scope.post = {url: 'http://', title: ''};
  };

  // removes an object from the posts array using the index of the object
  $scope.deletePost = function (index) {
  	$scope.posts.splice(index, 1);
  };
});