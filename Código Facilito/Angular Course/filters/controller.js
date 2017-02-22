/*global angular, console*/
var app = angular.module('Filters', []);

app.filter('removeHtml', function () {
	"use strict";
	return function (text) {
		return String(text).replace(/<[^>]+>/gm, '');
	};
});

app.controller('FiltersController', function ($scope) {
	"use strict";
	$scope.myHtml = '<p>Hello World</p>';
	$scope.cost = 25;
});