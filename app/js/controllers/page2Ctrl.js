'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function Page2Ctrl() {

  // ViewModel
  var vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

}

controllersModule.controller('Page2Ctrl', Page2Ctrl);
