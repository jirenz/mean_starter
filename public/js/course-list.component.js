angular.module('course').component('courseList', {
	templateUrl: 'views/course-list.html',
	controller: function CourseListController() {
		this.courses = [
			{name: "Measure Theory"},
			{name: "Algebraic Topology"},
			{name: "General Relativity"}
		];
		this.listcourses = function() {
			return this.courses
		};
	},
});