
'use strict';

var advisorPageModule = angular.module('advisorPageModule', ['ngRoute']);



advisorPageModule.controller('createAdvisorController', ['$scope' , '$location' ,  function ($scope , $location) {

	$scope.navigateToCreateAdvisorPage = function(){

	    $location.path('/backOffice/advisor/createAdvisor'); 
	}


}]);

