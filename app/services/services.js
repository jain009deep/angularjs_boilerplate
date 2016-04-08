POC.service('UserProfile', ['$rootScope', function ($rootScope) {
    var userProfile = {
        name: '',
        selectedBook: {}
    };    

    return userProfile;
}]);
