angular.module('course').component('courseList', {
	templateUrl: 'course/course-list/course-list.html',
	controller: ['Course', function CourseListController(Course) {
		var self = this;
		self.courses = Course.query()
		self.save = function (course) {
			delete course.edit
			course.$save()
		}
		/*$http.get('api/1.0/courses/').then( function(response)
		{
			self.courses = response.data
		})*/
		//$http.get('api/1.0/courses.json').then(function(response){
			//this.courses = [{name: "abc"}]
		//});
		/* */
	}]
});