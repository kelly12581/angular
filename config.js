var myapp= angular.module('myapp',['ui.router']);



myapp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/')
    $stateProvider
        .state('home',{//sref的名
            url : '/home',//地址栏名
            templateUrl : 'home.html'//配置的网页
        })
        .state('home.first',{//sref的名
            url : '/first',//地址栏名
            templateUrl : 'first.html'//配置的网页
        })
        .state('home.second',{
            url : '/second',
            templateUrl : 'second.html'
        })
        .state('home.third',{
            url : '/third',
            templateUrl : 'third.html'
        })
        .state('home.four',{
            url : '/four',
            templateUrl : 'four.html'
        })
        .state('home.first.a1',{
            url : '/first/a1',
            templateUrl : 'a1.html'
        })
        .state('home.first.a2',{
            url : '/first/a2',
            templateUrl : 'a2.html'
        })
})