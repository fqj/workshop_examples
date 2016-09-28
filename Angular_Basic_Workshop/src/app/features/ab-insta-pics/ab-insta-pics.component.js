(function() {
  'use strict';

  angular
    .module('app')
    .component('abInstaPics', {
      templateUrl: 'app/features/ab-insta-pics/ab-insta-pics.html',
      controller: InstaPicsController,
      controllerAs: 'vm'
    });

    /** @ngInject */
    function InstaPicsController(abInstaPictures, navbarPaths, toastr, creation) {
      var vm = this;
      vm.pageData = {
        section: 'Insta Pictures',
        pictures: abInstaPictures.getPics(),
        creationDate: creation.getDate(),
        brand: 'Angular Basic',
        paths: navbarPaths.getPaths()
      };
    }
})();