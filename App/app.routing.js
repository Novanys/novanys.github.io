(function () {
    'use strict';

    angular
        .module('app')
            .config(config);


function config($urlMatcherFactoryProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $stateProvider
    .state('Home', {
        url: '',
        views: {
            'main': {
                templateUrl: '/App/pages/home/home.view.html'
            }
        }
    })
    .state('Forum', {
        url: '/forum',
        views: {
            'main': {
                templateUrl: '/App/pages/forum/forum.view.html'
            }
        },
        redirectTo: 'Forum.Topics'
    })
    .state('Forum.Topics', {
        url: '',
        views: {
            'content': {
                controller: 'topicsController as tCtrl',
                templateUrl: '/App/pages/forum/topics.view.html'
            }
        },
        data: {
            displayName: "All topics"
        }
    })
    .state('Forum.CreateTopic', {
        url: '/createtopic',
        views: {
            'content': {
                controller: 'createtopicController as tCtrl',
                templateUrl: '/App/pages/forum/createtopic.view.html'
            }
        }
    })
    .state('Forum.Topic', {
        url: '/:id',
        views: {
            'content': {
                controller: 'topicController as tCtrl',
                templateUrl: '/App/pages/forum/topic.view.html'
            }
        },
        data: {
            displayName: "hej"
        }
    })
    .state('Users', {
        url: '/users',
        views: {
            'main': {
                controller: 'usersController as uCtrl',
                templateUrl: '/App/pages/user/users.view.html'
            }
        }
    })
    .state('User', {
        url: '/user/:id',
        views: {
            'main': {
                controller: 'userController as uCtrl',
                templateUrl: '/App/pages/user/user.view.html'
            }
        }
    })
    .state('Login', {
        url: '/login',
        views: {
            'main': {
        controller: 'loginController as vm',
        templateUrl: '/App/pages/login/login.view.html'
            }
        }
    })

        /*Admin*/
    .state('Admin', {
        url: '/admin',
        templateUrl: 'App/admin/index.html'
    })
    .state('Admin.Users', {
        url: '/admin/users',
        templateUrl: 'App/admin/något.html'
    });

}
})();
