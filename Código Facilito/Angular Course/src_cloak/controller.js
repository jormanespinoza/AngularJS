/*global angular, console*/

angular.module('CustomDirective', [])
	.directive('backImg', function () {
		'use strict';
		return function (scope, element, attrs) {
			attrs.$observe('backImg', function (value) {
				element.css({
					'background': 'url(' + value + ')',
					'background-position': 'center',
					'background-size': 'cover'
				});
			});
		};
	})
	.controller('AppCtrl', function ($scope, $http) {
		'use strict';
		$scope.repos = {};
		$http.get('https://api.github.com/users/l3inadz/repos')
			.then(function (response) {
				$scope.repos = response.data;
			}, function (response) {
				console.log(response);
			});
	});