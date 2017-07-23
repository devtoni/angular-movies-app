/* global angular */
angular.module('angularMovies')
  .controller('upComingMoviesCtrl', function ($scope, moviesDataServices) {
    moviesDataServices.upComingMovies()
      .then(function (movies) {
        $scope.comingSoon = movies.data.results
      })
  })
