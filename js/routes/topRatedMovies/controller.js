angular.module('angularMovies')
  .controller('topRatedMoviesCtrl', function ($scope, moviesDataServices) {
  	moviesDataServices.topRatedMovies()
  		.then(function (movies) {
  			console.log(movies)
    $scope.topMovies = movies.data.results
  		})
  })
