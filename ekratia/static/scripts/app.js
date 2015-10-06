'use strict';

/**
 * @ngdoc overview
 * @name Ekratia
 * @description
 * # Ekratia
 *
 * Main module of the application.
 */
var app = angular
  .module('Ekratia', [
  	'ngResource',
  ]);

app.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);