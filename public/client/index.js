/* global angular, nodered, express, openwhisk */

angular.module('template', [])
.controller('MainCtrl', function($scope, $http){
    // BEGIN CODE HERE
 
    $scope.title = "Tweets of SanFrancisco";
    $scope.getTweets = function() {
        $http.get('/tweets').then(function(response) {
            console.log(response.data.top);
            $scope.tweets=response.data;
        })
    }
    
    // END CODE
});
