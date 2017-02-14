'use strict';

/* App Module */
var myPharmaAppMainModuleVar = angular.module('myPharmaApp', ['ngRoute' ,  'landingPageModule'  , 'loginPageModule' , 'dashboardPageModule' , 'dealPageModule' , 'advisorPageModule' , 'subscriptionPageModule' , 'subscriptionCompanyPageModule' , 'ContractPageModule' ]);


/* app Routes */
myPharmaAppMainModuleVar.config(['$routeProvider', function($routeProvider) {    

    $routeProvider

    .when('/', {
        templateUrl: 'partials/websitePage/landingPage.html',
        controller : 'landingPageController'
       })
       
    .when('/login', {
            templateUrl: 'partials/loginPage/loginPage.html',
            controller : 'loginPageController'

        })
        
    .when('/backOffice/dashboard', {
            templateUrl: 'partials/backOffice/dashboard/dashboard.html',
            controller : 'dashboardController'   
        })
        
     .when('/backOffice/deal/createDeal', {
            templateUrl: 'partials/backOffice/deal/createDeal.html',
            controller : 'createDealController'   
        }) 
        
     .when('/backOffice/deal/searchDeal', {
            templateUrl: 'partials/backOffice/deal/searchDeal.html',
            controller : 'searchDealController'   
        }) 
     .when('/backOffice/advisor/createAdvisor', {
            templateUrl: 'partials/backOffice/advisor/createAdvisor.html',
            controller : 'createAdvisorController'   
        })   
     .when('/backOffice/subscription/createSubscription', {
            templateUrl: 'partials/backOffice/subscription/createSubscription.html',
            controller : 'createSubscriptionController'   
        })   
     .when('/backOffice/subscription/searchSubscription', {
            templateUrl: 'partials/backOffice/subscription/searchSubscription.html',
            controller : 'searchSubscriptionController'   
        }) 
     .when('/backOffice/subscriptionCompany/createSubscriptionCompany', {
            templateUrl: 'partials/backOffice/subscriptionCompany/createSubscriptionCompany.html',
            controller : 'searchSubscriptionController'   
        }) 
        
     .when('/backOffice/subscriptionCompany/searchSubscriptionCompany', {
            templateUrl: 'partials/backOffice/subscriptionCompany/searchSubscriptionCompany.html',
            controller : 'searchSubscriptionCompanyController'   
        }) 
        
      .when('/backOffice/contract/createContract', {
            templateUrl: 'partials/backOffice/contract/createContract.html',
            controller : 'createContractController'   
        }) 
        
      .when('/backOffice/contract/searchContract', {
            templateUrl: 'partials/backOffice/contract/searchContract.html',
            controller : 'searchContractController'   
        })  
          
    .otherwise({
        redirectTo: '/'
      });

  }]);




                         



