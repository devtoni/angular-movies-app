angular.module('angularMovies')
  .controller('popularMoviesCtrl', function ($scope, $rootScope, moviesDataServices) {
    moviesDataServices.getPopularMovies()
      .then(function (movies) {
        console.log(movies)
        $scope.popularMovies = movies.data.results
      })
  })
