var POC = angular.module("POC", ['ngRoute']);

/* Set routes */
POC.config(appRouter);
appRouter.$inject = ['$routeProvider'];

function appRouter($routeProvider) {
    $routeProvider.
    	when('/login', {
        	templateUrl: 'partials/login.html',
        	controller: 'loginCtrl'
    	}).
    	when('/landing', {
    		templateUrl: 'partials/landing.html',
    		controller: 'landingCtrl'
    	}).
        when('/bookDetails', {
            templateUrl: 'partials/bookDetails.html',
            controller: 'bookDetailsCtrl'
        }).
    	otherwise({
        	redirectTo: '/login'
    	});
}