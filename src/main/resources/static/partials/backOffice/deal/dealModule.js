
'use strict';

var dealPageModule = angular.module('dealPageModule', ['ngRoute' , 'ngAnimate', 'ui.bootstrap' , 'smart-table']);


dealPageModule.controller('createDealController', ['$scope' , '$location' ,  function ($scope , $location) {

	
	/** Naviagte to Create-Deal Page **/
	$scope.navigateToCreateDealPage = function(){
	    $location.path('/backOffice/deal/createDeal'); 
	}
	
	
	
	/** Date Picker **/
    $scope.today = function () {
        $scope.dt = new Date(2015, 10, 16);
    };
    $scope.dateformat="MM/dd/yyyy";
    $scope.today();
    $scope.showcalendar = function ($event) {
        $scope.showdp = true;
    };
    $scope.showdp = false;
      $scope.disabled = function (date, mode) {
      return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
};


}]);



dealPageModule.controller('searchDealController', ['$scope' , '$location' ,   function ($scope , $location ) {

	$scope.navigateToSearchDealPage = function(){

	    $location.path('/backOffice/deal/searchDeal'); 
	}
	
		var firstnames  = ['Laurent', 'Blandine', 'Olivier', 'Max'];
	    var lastnames   = ['Renard', 'Faivre', 'Frere', 'Eponge'];
	    var dates       = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
	    var id = 1;
	
	    function generateRandomItem(id) {
	
	        var firstname = firstnames[Math.floor(Math.random() * 3)];
	        var lastname = lastnames[Math.floor(Math.random() * 3)];
	        var birthdate = dates[Math.floor(Math.random() * 3)];
	        var balance = Math.floor(Math.random() * 2000);
	
	        return {
	            id: id,
	            firstName: firstname,
	            lastName: lastname,
	            birthDate: new Date(birthdate),
	            balance: balance
	        }
	    }
	
	    $scope.rowCollection = [];
	
	    for (id; id < 5; id++) {
	        $scope.rowCollection.push(generateRandomItem(id));
	    }
		    
	    $scope.itemsByPage=2;
	
	
}]);




