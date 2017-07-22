
angular.module('angularMovies')
  .controller('nowPlayingCtrl', function ($scope, moviesDataServices) {
  	moviesDataServices.nowPlayingMovies()
  		.then(function (movies) {
  			$scope.nowPlaying = movies.data.results
  		})
  })
