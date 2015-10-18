'use strict';

var userControllers = angular.module('UserControllers', []);
var rootUrl = "https://restfulusers.appspot.com/resources";

userControllers.controller('UserListCtrl', 
  ['$scope', '$http', function($scope, $http) {

	//get all users
	$http.get(rootUrl + "/users/").success(function(data) {
		$scope.users = data;
	});
}]);

userControllers.controller('UserDetailCtrl', 
  ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get(rootUrl + "/users/" + $routeParams.userId)
		.success(function(data) {
			$scope.user = data;
			
			//$scope.user.birthdate = 
				//Date.parse($scope.user.birthdate);
		});
	}
]);