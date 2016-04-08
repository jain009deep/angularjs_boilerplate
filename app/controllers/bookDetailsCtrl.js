POC.controller('bookDetailsCtrl', ['$scope', '$location', 'UserProfile', function ($scope, $location, UserProfile){
	$scope.name = UserProfile.name;
	$scope.book = UserProfile.selectedBook;

	$scope.back = function () {
		$location.url('/landing');
	}
	
	$scope.logout = function () {
		$location.url('/');
	}
}]);
