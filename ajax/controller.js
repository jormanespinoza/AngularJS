angular.module("theApp", [])
	.controller("theController",function($scope,$http){
		$scope.posts = [];
	  	$http.get("https://jsonplaceholder.typicode.com/posts")
	  		.success(function(data){
	  			console.log(data);
	  			$scope.posts = data;
	  		})
	  		.error(function(err){
	  			console.log("Error al recbir datos");
	  		});
	});