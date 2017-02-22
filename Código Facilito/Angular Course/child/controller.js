/*global angular, console*/
angular.module('MainModule', [])
	.run(function ($rootScope) {
		"use strict";
		$rootScope.name = "Jorman";
	})
	.controller('MainController', function ($scope) {
		"use strict";
		$scope.name = "Daniel";
		setTimeout(function () {
			$scope.$apply(function () {
				$scope.name = "Dani";
			});
		}, 1000);
	})
	.controller('ChildController', function ($scope) {
		"use strict";
	});