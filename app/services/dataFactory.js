POC.factory('DataFactory', ['$rootScope', '$http', 'mySettings', function ($rootScope, $http, mySettings) {
    var dataFactory = {
        getUserData: function () {
            return $http({method: 'GET', url: mySettings.users});
        },

        getBooksData: function () {
            return $http({method: 'GET', url: mySettings.books});
        }
    };    

    return dataFactory;
}]);