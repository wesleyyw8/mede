var app = angular.module('desafioMercadoEletronicoApp',['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider.
		when('/principal', {
			templateUrl: '../views/principal.html',
			controller: 'PrincipalController'
		}).
		otherwise({
			redirectTo: '/principal'
		});
}]);
