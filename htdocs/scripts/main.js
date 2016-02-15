define(
	[],
	function () {
		'use strict';

		var dependencies = [
			'ngResource',
			'ngRoute'
		];

		var unQuizApp = angular.module('unQuizApp', dependencies);

		// Configuration for the app goes here
		unQuizApp.config(['$routeProvider', function ($routeProvider) {
			// Mapping of routes to the corresonding modules
			var routes = {
				'/': {
					template: '<div> <p>{{ message }}</p> </div> <a href="#/undertale"> Mt. Ebott </a>',
					controller: function ($scope) {
						$scope.message = "Main Page";
					}
				},
				'/undertale': {
					template: "<div> <p>{{message }}</p> </div> <a href='#/'> Home </a>",
					controller: function ($scope) {
						$scope.message = "Undertale";
					}
				}
			};

		    Object.keys(routes).forEach(function (key) {
		        $routeProvider.when(key, routes[key]);
		    });
		}]);

		// Anything that needs to happen across the entire app goes here.
		unQuizApp.controller('unQuizController', function ($scope) {
			$scope.currentTitle = 'Unrelated Quizz';
			this.currentTitle = 'Unrelated Quizz';
		});

		// Define all other controllers, directives, services, etc. here.
	});
