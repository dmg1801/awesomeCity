(function () {
    'use strict';

    angular.module('AwesomeCity', [])
        .controller('AwesomeCityController', AwesomeCityController);

    AwesomeCityController.$inject = ['$scope'];
    function AwesomeCityController($scope) {
        $scope.message = "AWESOME CITY IS CONNECTED";
    }
})();