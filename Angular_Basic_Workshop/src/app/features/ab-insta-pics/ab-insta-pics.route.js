(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($stateProvider) {    
    $stateProvider
        .state('instaPics', {
          url: '/instaPics',
          template: '<ab-insta-pics></ab-insta-pics>'
        });              
  }

})();