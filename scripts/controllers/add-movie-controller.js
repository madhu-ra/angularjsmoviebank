//  controller for addMovie.html template
movieBank.controller('addMovieController',['$scope', 'commonServices', function($scope,commonServices){
    $scope.pageTitle = 'Create Movie';
    $scope.characterList = [];
    movies = [];
    
    $scope.createMovie = function (title, director, releaseYear, rating, language, description, country) {
        if(rating <= 10 && rating >= 1){    //  rating should be validated as in 1-10 according to the requirement
            $scope.movie = {
                Title : title,
                Director : director,
                ReleaseYear : releaseYear,
                Rating : rating,
                Language : language,
                Country : country,
                Description : description,
                characterList: []
            };

            commonServices.setMovies($scope.movie); //  update the movies array with newly created movie
        }     
        else{
            alert('Rating should be between 1-10');
        }
    }
    
    //  function to add characters for the current movie
    $scope.addCharacter = function (character, actor) {
        $scope.movie.characterList.push({
           Character : character,
           Actor : actor 
        });
        $scope.character = '';
        $scope.actor = '';
    }
    
    //  go to the home page
    $scope.goToMyMovies = function(){
        commonServices.changeLocation('/');
    }

}]);