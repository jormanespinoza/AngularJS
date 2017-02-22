/*global angular, console*/
var app = angular.module("FirstApp", []);

app.controller("FirstController", function ($scope, $http) {
	"use strict";
	// Adding Dependencies
	$scope.name = 'Jorman';
	$scope.newComment = {};
	$scope.comments = [
		{
			comment: 'Nice tutorial',
			username: 'Steve'
		},
		{
			comment: 'Good info',
			username: 'Bill'
		}
	];
	$scope.addComment = function () {
		$scope.comments.push($scope.newComment);
		$scope.newComment = {};
	};
	// Services JSON
	// Obtain data
	$scope.posts = [];
	$http.get('https://jsonplaceholder.typicode.com/posts')
		.then(function success(response) {
			//First function handles success			
			$scope.posts = response.data;
		}, function error(response) {
			//Second function handles error
			console.log('Error while loading services\' data');
		});
	// Add data
	$scope.newPost = {};
	$scope.addPost = function () {
		$http.post('https://jsonplaceholder.typicode.com/posts', {
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
			.then(function success(response) {
				//First function handles success			 
				$scope.posts.push(response.data); // $scope.newPost
				$scope.newPost = {};
			}, function error(response) {
				//Second function handles error  
				console.log('Error while charging data to the server');
			});
	};
});