movieBank.config([
    '$routeProvider', function($routeProvider){
        $routeProvider.when('/add',{
            templateUrl : '../partials/addMovie.html',
            controller : 'addMovieController'
        }).when('/',{
           templateUrl : '/partials/movieList.html',
           controller : 'movieListController' 
        }).when('/movieDetail',{
            templateUrl : '/partials/movieDetail.html',
            controller : 'movieDetailController'
        });
    }
]);