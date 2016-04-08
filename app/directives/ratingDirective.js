POC.directive('rating', function () {
	return {
		restrict: 'C',
		template: '<ul><li ng-repeat="star in stars" ng-class="star">\u2605</li></ul>',
        scope: {
        	ratingValue: '=',
        	max: '='
        },
		link: function (scope, elem, attr) {
			scope.stars = [];
			
			var updateStars = function () {
				for(var i=0; i < scope.max; i++) {
					scope.stars.push({filled: i < scope.ratingValue});
				}
			}

			scope.$watch('ratingValue', function (oldValue, newValue) {
				if(newValue) {
					updateStars();
				}
			})
		}
	};
});