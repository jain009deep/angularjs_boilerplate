POC.controller('loginCtrl', ['$scope', '$location', 'DataFactory', 'UserProfile', function ($scope, $location, DataFactory, UserProfile){
	$scope.username = '';
	$scope.password = '';

	$scope.login = function () {
		if($scope.username == '' || $scope.password == '') {
			$scope.errorMsg = "Either Username or Password is empty";
		} else {
			$scope.errorMsg = '';
			DataFactory.getUserData().success(function (data) {
				var found = false;
				for(var index = 0; index < data.length; index++) {
					if(data[index].username == $scope.username && data[index].password == $scope.password) {
						UserProfile.name = $scope.username;
						found = true;
						break;
					}
				}

				if(found == true) {
					$location.url('/landing');
				} else {
					$scope.errorMsg = 'Login Failed';
				}
				
            });
		}
	}
}]);
