var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'HolidaysController',
		templateUrl: 'views/holiday.html'
	})
	.when('/holidays', {
		controller:'HolidaysController',
		templateUrl: 'views/holiday.html'
	})
	.when('/holidays/add',{
		controller:'HolidaysController',
		templateUrl: 'views/add_holiday.html'
	})
	.when('/holidays/edit/:id',{
		controller:'HolidaysController',
		templateUrl: 'views/edit_holiday.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});