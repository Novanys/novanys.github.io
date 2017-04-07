'use strict';

(function () {
  angular.module('app.config', [])
  .value('app.config', {
      basePath: 'http://prevailed.azurewebsites.net/Api',
      basePathRoot: 'http://prevailed.azurewebsites.net'
  });

})();