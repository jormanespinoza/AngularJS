/*global angular, console*/

angular.module('CustomDirective', [])
	.directive('myAutocomplete', function () {
		'use strict';

		function link(scope, element, attrs) {
			$(element).autocomplete({
				source: scope[attrs.myAutocomplete],
				select: function (ev, ui) {
					ev.preventDefault();
					if (ui.item) {
						scope.optionSelected(ui.item.value);
					}
				},
				focus: function (ev, ui) {
					ev.preventDefault();
					$(this).val(ui.item.label);
				}
			});
		}
		return {
			link: link
		};
	})
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
	  var i = 0;
		$http.get('https://api.github.com/users/l3inadz/repos')
			.then(function (response) {
				$scope.repos = response.data;
				for (i = 0; i < response.data.length; i += 1) {
					var repo = response.date[i];
					$scope.repos.push[repo.name];
				}
			}, function (response) {
				console.log(response);
			});
		$scope.optionSelected = function (response) {
			$scope.$apply(function () {
				$scope.main_repo = response.data;
			});
		};
	});