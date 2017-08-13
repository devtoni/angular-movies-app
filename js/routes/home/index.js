/* global angular */
angular.module('angularMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/routes/home/template.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
  })
