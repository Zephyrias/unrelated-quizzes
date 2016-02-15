define(
	[
		'text!unQuiz/undertale/newhome/newhome.html'
	],
	function (newhomeTemplate) {
		'use strict';

		var newhomeController = function ($scope) {
			$scope.message = "Undertale";

		};

		return {
			template: newhomeTemplate,
			controller: newhomeController
		}
	});
