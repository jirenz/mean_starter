angular.module('courseApp').config([
	'$locationProvider', 
	'$routeProvider', 
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider.when('/courses/list', {
			template: '<course-list></course-list>'
		}).when('/courses/edit', {
			template: '<course-edit></course-edit>'
		}).when('courses/create', {
			template: '<course-create></course-create>'
		}).otherwise('courses/list');
}]);