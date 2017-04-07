'use strict';

(function () {
    angular.module('app').controller('userController', function (api, $stateParams) {
        var vm = this;
        vm.User = {};

        api.User.GetUserByName($stateParams.id, function (data) {
            vm.User = data;
        });

    });
})();