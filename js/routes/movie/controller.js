
angular.module('angularMovies')
  .controller('movieCtrl', function ($scope, $routeParams, moviesDataServices) {
  	$scope.idMovie = $routeParams.id
  	moviesDataServices.infoMovie($scope.idMovie)
  		.then(function (movie) {
  			console.log(movie)
  			$scope.movie = movie.data
  			$scope.genres = movie.data.genres.map(genre => genre.name).join(', ')
  		})
  })
