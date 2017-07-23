/* global angular */
angular.module('angularMovies')
  .controller('homeCtrl', function ($scope, $rootScope, moviesDataServices) {
    moviesDataServices.nowPlayingMovies()
      .then(function (movies) {
        $scope.nowPlaying = movies.data.results
      })
    moviesDataServices.topRatedMovies()
      .then(function (movies) {
        $scope.topMovies = movies.data.results
      })
    moviesDataServices.upComingMovies()
      .then(function (movies) {
        $scope.comingSoon = movies.data.results
      })
    moviesDataServices.getPopularMovies()
      .then(function (movies) {
        $scope.popularMovies = movies.data.results
      })
  })
