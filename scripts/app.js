'use strict';

/**
 * initialize the ng-app with ngRoute 
 * and our defined controllers
 */
var userApp = angular.module('UserApp', [
	'ngRoute',
	'UserControllers'
]);

//configure routing
userApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/home/', {
			templateUrl: 'partials/home.html'
		})
			
		.when('/users/', {
			templateUrl: 'partials/user-list.html',
			controller: 'UserListCtrl'
		})
		.when('/users/:userId', {
			templateUrl: 'partials/user-detail.html',
			controller: 'UserDetailCtrl'
		})
		
		.when('/new-user/', {
			templateUrl: 'partials/new-user.html',
			controller: 'NewUserCtrl'
		})
		
		.when('/departments/', {
			templateUrl: 'partials/dept-list.html',
			controller: 'DeptListCtrl'
		})
		.otherwise({ redirectTo: '/users/'});
	}
]);