define(['angular'], function() {
    var app = angular.module('ordersApp', []);
    app.init = function() {
        angular.bootstrap(document, ['ordersApp']);
    };

    return app;
});