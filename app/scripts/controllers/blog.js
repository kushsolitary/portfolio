'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
