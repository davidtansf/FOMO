angular.module('fomo.results', ['customFilters'])

.controller('ResultsController', ['$scope', '$log', 'SearchService',
  function($scope, $log, SearchService) {
    $scope.genPopularEvent = function() {
      SearchService.searchPopular()
      .success(function(data,status){
        $scope.popularEvents = data;
      })
    }
    $scope.submit = function() {
      console.log('query is ',$scope.query);
      SearchService.searchWithQuery($scope.query)
        .success(function(data, status) {
          $log.log(data);
          $scope.events = data;
      });
    };
    $scope.genPopularEvent();
}]);
