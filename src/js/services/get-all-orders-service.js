define(['app'], function (app) {
    app.service('getAllOrdersService', [function () {
        this.getAllOrders = function () {
            return orders;
        };
    }]);
});