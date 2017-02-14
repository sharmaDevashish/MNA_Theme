
'use strict';

var landingPageModule = angular.module('landingPageModule', ['ngRoute']);
console.log("Inside LandingPageModule");


landingPageModule.controller('landingPageController', ['$scope' , '$location',  function ($scope , $location) {

	console.log("Inside LandingPageController");

$scope.navigateToLoginPage = function(){

    $location.path('/backOffice/dashboard'); 
}


}]);













