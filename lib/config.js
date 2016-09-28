var myapp= angular.module('myapp',['ui.router']);

myapp.config(function($stateProvider,$urlRouterProvider){
	console.log($urlRouterProvider);
})