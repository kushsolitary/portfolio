'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('WorkCtrl', function ($scope, $http) {
  	var token = 'e7b15fb9b16b80beeb965aa5ae9cc596292fe64dde6bc57fe8d5840698cac9bf';
  	$scope.shots = []

  	$http.get('https://api.dribbble.com/v1/users/kushsolitary/shots?access_token=' + token + '&per_page=8')
  	.then(function(res) {
  		$scope.shots = res.data;
  	})
  });
