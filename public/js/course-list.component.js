angular.module('course').component('courseList', {
	templateUrl: 'views/course-list.html',
	controller: function CourseListController($http) {
		var self = this;
		$http.get('api/1.0/courses/').then( function(response)
		{
			self.courses = response.data
		})
		//$http.get('api/1.0/courses.json').then(function(response){
			//this.courses = [{name: "abc"}]
		//});
		/* */
		this.listcourses = function() {
			return this.courses
		};
	},
});