app.controller('loginCtrl',
		function($scope, $rootScope, $state, $localStorage) {

			$rootScope.loggedInUser = $localStorage.loggedInUser;

			$scope.users = [ {
				username : 'kaivals',
				password : 'test'
			}, {
				username : 'vinits',
				password : 'test'
			} ];

			$scope.login = function(username, password) {
				var isValidUser = false;
				angular.forEach($scope.users,
						function(user) {
							if (user.username == username
									&& user.password == password) {
								isValidUser = true;
							}
						});

				if (isValidUser) {
					$localStorage.loggedInUser = username;
					$rootScope.loggedInUser = username;
					$state.go('home');
				}
			}

		});