'use strict';

(function () {
    angular.module('app').controller('createtopicController', function (api, ShareData) {

        var vm = this;
        vm.Title = null;
        vm.Text = null;

        vm.CreateTopic = function () {
            var topic = {
                Title: vm.Title,
                Text: vm.Text
            }
            api.Topics.PostTopic(topic);
        }


    });
})();