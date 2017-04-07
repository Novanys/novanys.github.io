'use strict';

(function () {
    angular.module('app', ['ui.router', 'app.config', 'ui-breadcrumb', 'ngMessages']);
    angular.module('app').run(['$rootScope', '$state', function ($rootScope, $state) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
            if (toState.redirectTo) {
                event.preventDefault();
                $state.go(toState.redirectTo, toParams);
            }
        });

    }]);
})();