//  directive for including a summary for each movie 
movieBank.directive('movieSummary', function(){
    return{
        restrict : 'E',
template :      '<header>' +
                    '<span class="title">{{title}} ({{year}})</span>' +
                    '<div star-rating rating-value="rating" class="rating"></div>' +
                '</header>' +
                '<p class="panel-body">' +
                    '{{description}}' +
                '</p>' +                            
                '<input type="button" value="Detail" class="btn btn-primary button" ng-click="details({m : movie});">',
         scope : {
             title : '@',
             year : '@',
             description : '@',
             rating : '@',
             details : '&'
         }
    }
});