'use strict';

//initialize the ng-app with ngRoute and our defined controllers
var userApp = angular.module('UserApp', [
	'ngRoute',
	'UserControllers'
]);

userApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/users', {
			templateUrl: 'partials/user-list.html',
			controller: 'UserListCtrl'
		})
		.when('/users/:userId', {
			templateUrl: 'partials/user-detail.html',
			controller: 'UserDetailCtrl'
		})
		.otherwise({ redirectTo: '/users'});
	}
]);