/* global angular */
angular.module('angularMovies')
  .controller('nowPlayingCtrl', function ($scope, moviesDataServices) {
    moviesDataServices.nowPlayingMovies()
      .then(function (movies) {
        console.log(movies)
        $scope.nowPlaying = movies.data.results
      })
  })
