angular.module('eventApp', ['ngRoute'])
.config(['$routeProvider',function($routeProvider) {
    
	$routeProvider
        .when('/', {
	   	templateUrl:'views/home.html',
	   	controller: 'formCtrl',
	   	controllerAs:'eventCtl'

	   })
	   .otherwise({redirectTo:'/'});
       

}]);
