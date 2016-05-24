//  controller for the movieList.html template
movieBank.controller('movieListController',['$scope', 'commonServices', function($scope, commonServices){
    $scope.movies = commonServices.getMovies();
    
    //  if the current movies list is empty, add one for demo purposes
    if($scope.movies.length == 0){
        movie = {
            Title : 'Ice Age: Collision Course',
            Director : 'Mike Thurmeier',
            ReleaseYear : 2016,
            Rating : 8,
            Language : 'English',
            Country : 'United States',
            Description : 'Scrat\'s epic pursuit of his elusive acorn catapults him outside of Earth, where he accidentally sets off a series of cosmic events that transform and threaten the planet. To save themselves from peril, Manny, Sid, Diego, and the rest of the herd leave their home and ' + 'embark on a quest full of thrills and spills, high and lows, laughter and adventure while traveling to exotic new lands and encountering a host of colorful new characters as well as a new enemy who is a brother to one of their old foes.',
            characterList: [{Character : 'Scrat', Actor : 'Chris Wedge'}]
        };
        commonServices.setMovies(movie);
    }  
    
    //  go to addMovie view
    $scope.goToAddMovie = function(){
        commonServices.changeLocation('/add');
    }
    
    //  load the detail view of a selected movie
    $scope.goToMovieDetail = function(movie){
        commonServices.setMovie(movie);
        commonServices.changeLocation('/movieDetail');
    }
}]);