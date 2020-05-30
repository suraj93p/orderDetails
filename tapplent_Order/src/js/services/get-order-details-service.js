define(['app'], function (app) {
    app.service('getOrderDetailsService', [function () {
        this.getOrderDetails = function (order) {
            return order;
        };
    }]);
});