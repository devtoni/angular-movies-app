
angular.module('angularMovies')
  .controller('movieCtrl', function ($scope, $routeParams, $sce, moviesDataServices) {
    $scope.idMovie = $routeParams.id
    moviesDataServices.infoMovie($scope.idMovie)
      .then(function (movieInfo) {
        console.log(movieInfo)
        $scope.movie = movieInfo.data
        $scope.genres = movieInfo.data.genres.map(genre => genre.name).join(', ')
        $scope.videoLink = 'https://www.youtube.com/embed/' + $scope.movie.videos.results['0'].key
        $scope.youtube = $sce.trustAsResourceUrl($scope.videoLink)
      })

    $scope.video = false
    $scope.back = function () {
      window.history.back()
    }
    $scope.watchVideo = function () {
      if ($scope.video) {
        $scope.video = false
      } else {
        $scope.video = true
      }
    }
  })
