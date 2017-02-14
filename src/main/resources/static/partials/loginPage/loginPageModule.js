
'use strict';

var loginPageModule = angular.module('loginPageModule', ['ngRoute']);

console.log("Inside LoginPageModule");

loginPageModule.service('loginService', [ '$http' , '$q', '$location',  function ( $http , $q, $location ) {

    var authUser  = function (user){
    	
				            var deferred = $q.defer();
				    
				             $http({
								    'method'    : "POST",
								    'url'       : "http://localhost:8080/joshikatech/api/v1/user",
								    'data'      : JSON.stringify(user),
								    'dataType'  : 'json',
								     headers    : {
								    	            'Accept': 'application/json'
								    		      }	
								   })
				            .then(function successCallback(response) {//this callback will be called asynchronously when the response is available
							    //  alert(JSON.stringify(response));
							      deferred.resolve(response);	
							
							 }, function errorCallback(response) {     //called asynchronously if an error occurs or server returns response with an error status.
							   alert(JSON.stringify(response));
							    deferred.reject(error);	
												 		   
							   });
				            
	                         return deferred.promise;

                        };
                        
                        
			 return {
			          authenticateUser : authUser
			        };

}]);


loginPageModule.controller('loginPageController', ['$scope' , '$location', 'loginService' , function ($scope , $location ,loginService) {

  $scope.login = function(user){
 
  var promise = loginService.authenticateUser(user);
  
  promise.then(function () {
     $location.path('/backOffice/dashboard');
  });
  
 }
 
}]);













