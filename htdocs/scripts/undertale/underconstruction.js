define(
	[
		'text!unQuiz/undertale/underconstruction/underconstruction.html'
	],
	function (underConstructionTemplate) {
		'use strict';

		var underConstructionController = function ($scope) {
			$scope.message = "Under Construction";

		};

		return {
			template: underConstructionTemplate,
			controller: underConstructionController
		}
	});
