
'use strict';

var subscriptionPageModule = angular.module('subscriptionPageModule', ['ngRoute']);


subscriptionPageModule.controller('createSubscriptionController', ['$scope' , '$location' ,  function ($scope , $location) {

	$scope.navigateToCreateSubscriptionPage = function(){

	    $location.path('/backOffice/subscription/createSubscription'); 
	}

}]);



subscriptionPageModule.controller('searchSubscriptionController', ['$scope' , '$location' ,  function ($scope , $location) {

	$scope.navigateToSearchSubscriptionPage = function(){

	    $location.path('/backOffice/subscription/searchSubscription'); 
	}

}]);






