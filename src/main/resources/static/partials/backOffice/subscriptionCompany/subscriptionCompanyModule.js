
'use strict';

var subscriptionCompanyPageModule = angular.module('subscriptionCompanyPageModule', ['ngRoute']);


subscriptionCompanyPageModule.controller('createSubscriptionCompanyController', ['$scope' , '$location' ,  function ($scope , $location) {

	$scope.navigateToCreateSubscriptionCompanyPage = function(){

	    $location.path('/backOffice/subscriptionCompany/createSubscriptionCompany'); 
	}

}]);



subscriptionCompanyPageModule.controller('searchSubscriptionCompanyController', ['$scope' , '$location' ,  function ($scope , $location) {

	$scope.navigateToSearchSubscriptionCompanyPage = function(){

	    $location.path('/backOffice/subscriptionCompany/searchSubscriptionCompany'); 
	}

}]);




