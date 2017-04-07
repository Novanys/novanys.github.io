'use strict';

(function () {
  angular.module('app.config', [])
  .value('app.config', {
      basePath: 'https://prevailed.azurewebsites.net/Api',
      basePathRoot: 'https://prevailed.azurewebsites.net'
  });

})();