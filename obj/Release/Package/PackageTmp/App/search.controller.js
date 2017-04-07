'use strict';

(function () {

    angular.module('app').controller('navSearchController', ['$scope', '$location', 'ShareData', function ($scope, $location, ShareData) {
        $scope.searchQuery = ShareData;

        $scope.submitQuery = function () {
            if ($scope.searchQuery) {
                $location.path("/forum");
            }
            
        };

    }])
})();