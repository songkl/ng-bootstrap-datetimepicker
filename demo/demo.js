angular.module('demo',['ngDatetimePicker'])
    .controller('testCtrl',function ($scope) {
        $scope.time = Date.now();
    });