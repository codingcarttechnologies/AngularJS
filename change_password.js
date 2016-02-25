(function(){
    var dependencies = [
        'lender.util'
    ];

    var module = angular.module('fundingtrail.lender.changePassword', dependencies);
    module.controller('changePasswordController', [
        '$scope',
        '$http',
        'constants',
        function($scope, $http, constants) {

            $scope.password = {};

            $scope.flags = {
                updated: false,
                failed: false
            };
            $scope.update = function update() {
                console.log('sachin',$scope.password);
                if ($scope.changePasswordForm.$valid) {
                    $http.post(constants.APP_PATH + '/borrower/api/borrower/change-password/', $scope.password)
                    .success(function(response) {
                        if (response === "OK") {
                            $scope.flags.updated = true;
                        }
                        else if (response === "BAD_PASSWORD") {
                            $scope.flags.failed = true;
                        }
                    });
                }
            }
        }
    ]);

})();