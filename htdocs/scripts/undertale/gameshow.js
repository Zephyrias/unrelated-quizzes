define(
	[
		'text!unQuiz/undertale/gameshow/gameshow.html'
	],
	function (gameshowTemplate) {
		'use strict';

		var gameshowController = function ($scope) {
			$scope.message = "Game Show";

		};

		return {
			template: gameshowTemplate,
			controller: gameshowController
		}
	});
