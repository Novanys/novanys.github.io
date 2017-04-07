'use strict';

(function () {
    angular.module('app').controller('topicController', function (api, $stateParams) {
        var vm = this;
        vm.Topic = {};
        vm.Loading = false;


        vm.AddPostComment = "Skapa";


        vm.thisUrl = document.URL;
        vm.AddComment = function () {

            vm.AddPostComment = "Skapar...";
            var cmt = {
                Id: $stateParams.id,
                Text: vm.Text
            }
            api.Topics.PostComment(cmt, function (data) {
                vm.Topic = data;
                vm.Loading = false;
                vm.AddPostComment = "Skapa";
            })
        }

        api.Topics.GetTopicById($stateParams.id, function (data) {
            vm.Topic = data;
        });

    });
})();