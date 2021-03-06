(function () {
    'use strict';

    function CoinomatRestangularFactory(constants, rest) {
        return rest.withConfig(function(configurer) {
            configurer.setBaseUrl(constants.COINOMAT_ADDRESS);
            configurer.setJsonp(true);
        });
    }

    CoinomatRestangularFactory.$inject = ['constants.application', 'Restangular'];

    angular
        .module('app.ui')
        .factory('CoinomatRestangular', CoinomatRestangularFactory);
})();
