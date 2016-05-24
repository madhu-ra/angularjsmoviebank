//  controller for the movieDetail.html template
movieBank.controller('movieDetailController',['$scope', 'commonServices', function($scope, commonServices){
    $scope.movie = commonServices.getMovie();   // set the current scope movie object to bind with UI
}]);