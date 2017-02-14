'use strict';

/* App Module */
var myPharmaAppMainModuleVar = angular.module('myPharmaApp', ['ngRoute' ,'homePageModule'  , 'loginPageModule' , 'backOfficeHomepageModule']);


/* app Routes */
myPharmaAppMainModuleVar.config(['$routeProvider', function($routeProvider) {    

    $routeProvider

    .when('/', {
        templateUrl: 'partials/homepage/homePage.html',
        controller: 'homeController'

       })
    
    .when('/login', {
            templateUrl: 'partials/loginPage/loginPage.html',
            controller : 'loginController'
        })

    .when('/backOffice', {
            templateUrl: 'partials/backOffice/homePage.html',
            controller : 'backOfficeHomePageController'
        })

    .otherwise({
        redirectTo: '/homePage'
      });


  }]);




                         



