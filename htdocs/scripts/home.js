define(
	[
		'text!unQuiz/home/home.html'
	],
	function (homeTemplate) {
		'use strict';

		var homeController = function ($scope) {
			$scope.message = "Unrelated Quizzes";

		};

		return {
			template: homeTemplate,
			controller: homeController
		}
	});
