/*global angular, console*/
angular.module('ToDoList', ['LocalStorageModule'])
	.factory('ToDoService', function (localStorageService) {
		"use strict";
		var toDoService = {};
		toDoService.key = 'angular-todoList';

		if (localStorageService.get(toDoService.key)) {
			toDoService.activities = localStorageService.get(toDoService.key);
		} else {
			toDoService.activities = [];
		}
	
		toDoService.refreshLocalStorage = function () {
			localStorageService.set(toDoService.key, toDoService.activities);
		};

		toDoService.add = function (newActivity) {
			toDoService.activities.push(newActivity);
			toDoService.refreshLocalStorage();
		};
		
		toDoService.clean = function () {
			toDoService.activities = [];
			toDoService.refreshLocalStorage();
		};
	
		toDoService.getAll = function () {
			return toDoService.activities;
		};
	
		toDoService.removeItem = function (item) {
			toDoService.activities = toDoService.activities.filter(function (activity) {
				return activity !== item;
			});
	
			toDoService.refreshLocalStorage();
			return toDoService.getAll();
		};

		return toDoService;
	})
	.controller('ToDoController', function ($scope, ToDoService) {
		"use strict";
	
		$scope.todo = ToDoService.getAll();
		$scope.newActivity = {};
	
		$scope.addActivity = function () {
			// Add task
			ToDoService.add($scope.newActivity);
			$scope.newActivity = {};
		};
			
		$scope.removeActivity = function (item) {
			// Remove task
			$scope.todo = ToDoService.removeItem(item);
		};
	
		$scope.cleanActivities = function () {
			// Clean activities list
			$scope.todo = ToDoService.clean();
		};
	});