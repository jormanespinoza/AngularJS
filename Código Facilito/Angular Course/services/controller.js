/*global angular, console*/
angular.module('ToDoList', ['LocalStorageModule'])
	.service('ToDoService', function (localStorageService) {
		"use strict";
	
		this.key = 'angular-todoList';

		if (localStorageService.get(this.key)) {
			this.activities = localStorageService.get(this.key);
		} else {
			this.activities = [];
		}
	
		this.refreshLocalStorage = function () {
			localStorageService.set(this.key, this.activities);
		};

		this.add = function (newActivity) {
			this.activities.push(newActivity);
			this.refreshLocalStorage();
		};
		
		this.clean = function () {
			this.activities = [];
			this.refreshLocalStorage();
		};
	
		this.getAll = function () {
			return this.activities;
		};
	
		this.removeItem = function (item) {
			this.activities = this.activities.filter(function (activity) {
				return activity !== item;
			});
	
			this.refreshLocalStorage();
			return this.getAll();
		};
		
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