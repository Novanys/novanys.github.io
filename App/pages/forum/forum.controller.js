'use strict';

(function () {
    angular.module('app').controller('forumController', function (api, ShareData) {

        var vm = this;
        vm.Topics;
        vm.Name = 'Arvid';

        vm.searchQuery = ShareData;

        api.Topics.GetTopics(function (data) {
            vm.Topics = data;
        });

    });
})();