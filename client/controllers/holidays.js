var myApp = angular.module('myApp');

myApp.controller('HolidaysController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('HolidaysController loaded...');

	$scope.getHolidays = function(){
		$http.get('/api/holiday').success(function(response){
			$scope.holidays = response;
		});
	}

	$scope.getHoliday = function(){
		var id = $routeParams.id;
		$http.get('/api/holiday/'+id).success(function(response){
			$scope.holiday = response;
		});
	}

	$scope.addHoliday = function(){
		console.log($scope.holiday);
		$http.post('/api/holiday/', $scope.holiday).success(function(response){
			window.location.href='#/holiday';
		});
	}

	$scope.updateHoliday = function(){
		var id = $routeParams.id;
		$http.put('/api/holiday/'+id, $scope.holiday).success(function(response){
			window.location.href='#/holiday';
		});
	}

	$scope.removeHoliday = function(id){
		$http.delete('/api/holiday/'+id).success(function(response){
			window.location.href='#/holiday';
		});
	}
}]);