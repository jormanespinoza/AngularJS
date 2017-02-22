/*global angular, console*/
angular.module('MainModule', [])
	.controller('MainController', function ($scope, $http) {
		"use strict";
		$scope.loading = true;
		$http.get('https://jsonplaceholder.typicode.com/posts')
			.then(function success(response) {
				//First function handles success			
				$scope.posts = response.data;
				$scope.loading = false;
			}, function error(response) {
				//Second function handles error
				$scope.loading = false;
				console.log('Error while loading services\' data');
			});
	});