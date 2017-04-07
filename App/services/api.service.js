'use strict';
(function () {

    angular.module('app').factory('api', ['$http', 'app.config', function api($http, config){

        var Topics = {
            GetTopics: function(callback){
                $http({
                    header: {
                     'Access-Control-Allow-Origin': '*'
                    },
                    method: 'GET',
                    url: config.basePath + '/Topic/GetTopics/'
                })
                .then(function(response){
                    callback(response.data);
                });
            },
            GetTopicById: function(Id, callback){
                $http.get(config.basePath + '/Topic/GetTopic/'+ Id)
                .then(function(response){
                    callback(response.data);
                });
            },
            PostTopic: function(topic){
                $http({
                    header: {
                     'Access-Control-Allow-Origin': '*'
                    },
                    method: 'POST',
                    url: config.basePath + '/Topic/PostTopic/',
                    data: topic
                });
            },
            PostComment: function (cmt, callback) {
                $http({
                    headers: {
                     'Access-Control-Allow-Origin': '*'
                    },
                    method: 'POST',
                    url: config.basePath + '/Topic/PostComment/',
                    data: cmt
                })
                .then(function (response) {
                    callback(response.data);
                });
            }
        };

        var User = {
            GetUserByName: function (name, callback) {
                $http.get(config.basePath + '/User/GetUser/'+ name)
                .then(function (response) {
                    callback(response.data);
                });
            },
            GetUsers: function (callback) {
                $http.get(config.basePath + '/User/GetUsers/')
                .then(function (response) {
                    callback(response.data);
                });
            }

        };


        return {
            Topics: Topics,
            User: User
        };
    }]);
})();