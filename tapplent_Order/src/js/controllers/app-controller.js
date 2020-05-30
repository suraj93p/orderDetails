define(['app', 'getAllOrdersService', 'getOrderDetailsService'], function (app) {
    app.controller('ordersAppController', ['$scope', 'getAllOrdersService', 'getOrderDetailsService', function ($scope, getAllOrdersService, getOrderDetailsService) {
        $scope.getAllOrders = function () {
            $scope.orders = getAllOrdersService.getAllOrders();
        };
        $scope.getOrderDetails = function (order) {
            $scope.selectedOrder = getOrderDetailsService.getOrderDetails(order);
        };
        $scope.getAllOrders();
    }]);
});