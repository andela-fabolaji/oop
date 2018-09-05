/**
 * This modified program switches the dependency mode, now we get
 * a copy of the desired order Sender.
 * 
 */
const Order = function (customerId) {
  this.customerId = customerId;
  this.date = new Date();
  this.items = [];
};

const OrderSender = (function () {
  const OrderSender = function () {};

  OrderSender.prototype.send = function (order) {
    // process order via network request;
  };

  OrderManager.prototype.handleResponse = function (response) {
    console.log(response);
  };

  OrderManager.prototype.handeError = function (err) {
    console.log(err);
  }

  return OrderSender;
}());

const OrderManager = (function () {
  let orderSender;
  const OrderManager = function(orderSender) {
    orderSender = orderSender;
  };

  OrderManager.prototype.createOrder = function (customerId) {
    this.order = new Order(customerId);
  };

  OrderManager.prototyp.addItems = function (item) {
    this.order.items.push(item);
  };

  OrderManager.prototype.verifyOrder = function (order) {
    return order.items.length > 0;
  };

  OrderManager.prototype.sendOrder = function (order) {
    orderSender.send(order);
  };

  return OrderManager;
}());

const orderManager = new OrderManager(new OrderSender());