/**
 * Created by DELL on 2017/10/19.
 */
var app=angular.module("myapp",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("serve",{
            url:"/serve",
            templateUrl:"App/View/serve.html",
            controller:"carController"
        })
        .state("bank",{
            url:"/bank",
            templateUrl:"App/View/bank.html"
        });
    $urlRouterProvider.otherwise("/serve")
});