//################# START SERVICES  ######################################################//

//  common services to be shared in the app
movieBank.service('commonServices',['$location', function($location){
   var movies = [];
   var movie = {};
   return {
        getMovie : function () {
            return movie;
        },
        setMovie : function(m){
            movie = m;
        },
        getMovies : function(){
            return movies;
        },
        setMovies : function(m){
            movies.push(m);
        },
        changeLocation : function(location){
            $location.path(location);
        }
   };
}]);

//################# END SERVICES  ######################################################//