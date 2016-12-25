angular.module('course.resource', ['ngResource']).factory('Course', ['$resource',
		function($resource) {
			return $resource('/api/1.0/courses/:courseId', {courseId: '@_id'}, {});
		}]
	);