'use strict';

var userControllers = angular.module('UserControllers', []);
var rootUrl = "https://restfulusers.appspot.com/resources";


userControllers.controller('UserListCtrl', 
  ['$scope', '$http', function($scope, $http) {

	  //get all users
	  $http.get(rootUrl + "/users/")
	  	.success(function(data) {
		  $scope.users = data;

		  setTimeout(function() {
			  //remove loading and show table
			  $('.loading').parent().detach();
			  $('.user-list').css('visibility', 'visible');
		  }, 100);
	});
}]);

userControllers.controller('UserDetailCtrl', 
  ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		
		//get user based on id
		$http.get(rootUrl + "/users/" + $routeParams.userId)
			.success(function(data) {
				$scope.user = data;
		});
	}
]);

userControllers.controller('NewUserCtrl',
  ['$scope', '$http', function($scope, $http) {
  }
]);

