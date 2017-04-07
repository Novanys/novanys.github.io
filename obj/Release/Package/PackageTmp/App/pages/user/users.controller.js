'use strict';

(function () {
    angular.module('app').controller('usersController', function (api) {
        var vm = this;
        vm.sortedcontacts = {};

        api.User.GetUsers(function (data) {
             vm.sortedcontacts = _.groupBy(data, function(item) {return item.Name[0];
        });
    });
    });
})();