/* global angular */
angular.module('angularMovies')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/PopularMovies/:id', {
        templateUrl: 'js/routes/movie/template.html',
        controller: 'movieCtrl'
      })
      .when('/topRatedMovies/:id', {
        templateUrl: 'js/routes/movie/template.html',
        controller: 'movieCtrl'
      })
      .when('/nowPlaying/:id', {
        templateUrl: 'js/routes/movie/template.html',
        controller: 'movieCtrl'
      })
       .when('/upComingMovies/:id', {
         templateUrl: 'js/routes/movie/template.html',
         controller: 'movieCtrl'
       })
       .when('#!/:id', {
         templateUrl: 'js/routes/home/template.html',
         controller: 'movieCtrl'
       })
  })
