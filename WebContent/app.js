var app = angular.module('todo-app', [ 'ui.router', 'ngStorage' ]);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');

	$stateProvider

	.state('home', {
		url : '/home',
		templateUrl : 'view/toDo.html',
		controller : 'myCtrl'
	}).state('login', {
		url : '/login',
		templateUrl : 'view/signin.html',
		controller : 'loginCtrl'
	});

});