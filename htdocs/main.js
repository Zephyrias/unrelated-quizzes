define(
	[
		'unQuiz/home',
		'unQuiz/undertale/newhome',
		'unQuiz/undertale/gameshow',
		'unQuiz/undertale/underconstruction'
	],
	function (home, newhome, gameshow, underconstruction) {
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
				'/': home,
				'/undertale': newhome,
				'/undertale/game-show': gameshow,
				'/undertale/judgment-hall': underconstruction,
				'/undertale/puzzle-paradise': underconstruction,
				'/undertale/wishing-room': underconstruction
			};

		    Object.keys(routes).forEach(function (key) {
		        $routeProvider.when(key, routes[key]);
		    });

		    $routeProvider.otherwise(underconstruction);
		}]);

		// Anything that needs to happen across the entire app goes here.
		unQuizApp.controller('unQuizController', function ($scope) {
			$scope.currentTitle = 'Unrelated Quizz';
			this.currentTitle = 'Unrelated Quizz';
		});

		// Define all other controllers, directives, services, etc. here.
	});
