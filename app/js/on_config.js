'use strict';

/**
 * @ngInject
 */
function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'HomeCtrl as home',
    templateUrl: 'home.html',
    title: 'Home'
  })

  .state('Page2', {
      url: '/page2',
      controller: 'Page2Ctrl as page2',
      templateUrl: 'page2.html',
      title: 'Page 2'
  });

  $urlRouterProvider.otherwise('/');

}

module.exports = OnConfig;
