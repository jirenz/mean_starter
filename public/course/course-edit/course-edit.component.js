angular.module('course').component('courseEdit', {
	templateUrl: 'course/course-edit/course-edit.html',
	controller: ['Course', function CourseListController(Course) {
		var self = this;
		this.courseId = "Please enter id here";
		this.search = function() {
			//this.course = {name: "abc", description: "pear"};
			Course.get({courseId: this.courseId}, function(course) {
				self.course = course
			});
		}
		this.update = function() {
			/// TODO: Update the DOM course list
			this.course.$save({courseId: this.courseId})
		};
	}]
});


// angular.module('course').('courseEdit', 
// 	['$scope', function CourseEditController($scope) {
// 		var self = this;
// 		$scope.name = "abcd"
// 		$scope.retrive = function(course_id) {
// 			var retrivedCourse = {name: "abc"}
// 			$scope.course = retrivedCourse
// 			//= Course.get({course_id: course_id}, function() {
// 			//	$scope.course = retrived_course
// 			//})
// 		};
// 		$scope.update = function(course) {
// 			$scope.course.$save()
// 		};
// 	}]
// );