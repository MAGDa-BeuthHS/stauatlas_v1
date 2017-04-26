var app = angular.module('trafficApp', [
	'ngRoute'
]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl : "/views/home.html"
	});
});