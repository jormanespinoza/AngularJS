/*global angular, console*/
var app = angular.module('ToDoList', ['LocalStorageModule']);

app.controller('ToDoController', function ($scope, localStorageService) {
	"use strict";
	if (localStorageService.get('angular-todoList')) {
		$scope.todo = localStorageService.get('angular-todoList'); // Indicates the key word of the list 
	} else {
		$scope.todo = [];
	}
	/*
		{
			activity: 'Finish the Angular course',
			date: '3-03-17 2:00pm'
		}
	*/
	$scope.$watchCollection('todo', function (newValue, oldValue) {
		localStorageService.set('angular-todoList', $scope.todo); // Save the the changes every time the list is updated
	});
	$scope.addActivity = function () {
		// Add task
		$scope.todo.push($scope.newActivity);
		$scope.newActivity = {};
	};
	$scope.clearActivities = function () {
		// Clean the activities list
		$scope.todo = [];
	};
});