
'use strict';

var ContractPageModule = angular.module('ContractPageModule', ['ngRoute']);


ContractPageModule .controller('createContractController', ['$scope' , '$location' ,  function ($scope , $location) {

	 $scope.navigateToCreateContractPage = function(){

	    $location.path('/backOffice/contract/createContract'); 
	}


}]);


ContractPageModule .controller('searchContractController', ['$scope' , '$location' ,  function ($scope , $location) {

	 $scope.navigateToSearchContractPage = function(){

	    $location.path('/backOffice/contract/searchContract'); 
	}


}]);