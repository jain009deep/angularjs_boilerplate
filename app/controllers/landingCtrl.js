POC.controller('landingCtrl', ['$scope', '$location', 'UserProfile', 'DataFactory', function ($scope, $location, UserProfile, DataFactory){
	$scope.name = UserProfile.name;
	$scope.books = [];

	DataFactory.getBooksData().success(function (data) {
		$scope.books = data;
	});

	$scope.clearSearchBox = function () {
		$scope.searchBook = "";
	}
	
	$scope.logout = function () {
		$location.url('/');
	}

	$scope.showDetails = function (book) {
		UserProfile.selectedBook = book;
		$location.url('/bookDetails');
	}
}]);
