(function() {
  'use strict';

  angular
    .module('app')
    .component('abPicture', {
      templateUrl: 'app/components/ab-picture/ab-picture.html',
      controller: ABPictureController,
      controllerAs: 'vm',
      bindings:{
          picture : '<'
      }
    });

    /** @ngInject */
    function ABPictureController() {
      var vm = this;
      vm.setPictureLike = setPictureLike;
      
      function setPictureLike( picture ){
        picture.like = picture.like === true ? false : true;
      }
    }
  
})();