'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('GlobalCtrl', function ($scope, $rootScope, $route) {
  	$rootScope.$route = $route;

  });
