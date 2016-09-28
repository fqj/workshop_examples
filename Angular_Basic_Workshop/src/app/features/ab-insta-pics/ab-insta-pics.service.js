(function() {
  'use strict';

  angular
      .module('app')
      .service('abInstaPictures', pictures);

  /** @ngInject */
  function pictures() {
    var data = [
      {
        'url': 'https://cdn.pastemagazine.com/www/system/images/photo_albums/instagram-photographers/large/8-ig-photog-fagfrag.jpg?1384968217',
        'title': 'My beautiful semaphore',
        'like': false
      },
      {
        'url': 'http://i.amz.mshcdn.com/kl6WpszKWhL3lMM26iJBXKZNBpk=/fit-in/850x850/http%3A%2F%2Fmashable.com%2Fwp-content%2Fgallery%2Fbest-instagram-images%2F1mattrubin.jpg',
        'title': 'My beautiful car',
        'like': false
      },
      {
        'url': 'http://www.cestchristine.com/wp-content/uploads/2012/06/c8f1fe32667511e180c9123138016265_7.jpg',
        'title': 'My beautiful palm tree',
        'like': false
      },
      {
        'url': 'https://i.kinja-img.com/gawker-media/image/upload/s--aqzWMB91--/17jvp3a19o6gpjpg.jpg',
        'title': 'My beautiful rain',
        'like': false
      },
      {
        'url': 'http://media.vogue.com/r/h_480,w_480//wp-content/uploads/2015/02/13/02-karlie-kloss-taylor-swift-best-friends-bff.jpg',
        'title': 'My beautiful jump',
        'like': false
      },
      {
        'url': 'https://cdn.pastemagazine.com/www/system/images/photo_albums/instagram-photographers/large/8-ig-photog-fagfrag.jpg?1384968217',
        'title': 'My beautiful laugh',
        'like': false
      },
      {
        'url': 'http://www.wix.com/blog/wp-content/uploads/2013/05/Instagram_10_514.jpg',
        'title': 'My beautiful painting',
        'like': false
      },
      {
        'url': 'http://cdn.shutterbug.com/images/styles/600_wide/public/Shark-Week-Instagram.jpg?itok=w0rYc4f-',
        'title': 'My beautiful shark',
        'like': false
      },
      {
        'url': 'https://tid.al/blog/wp-content/uploads/2015/09/best-instagram-marketing-brands.jpg',
        'title': 'My beautiful glasses',
        'like': false
      }
    ];

    this.getPics = getPics;

    function getPics() {
      return data;
    }
  }

})();