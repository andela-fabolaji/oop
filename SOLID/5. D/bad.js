/**
 * This program fails Dependency inversion principle because Order 
 * Manager completely depends on order Sender. If we include more 
 * OrderSenders(sms, email) in future, OrderManager will not be 
 * able to implement them. So we have to find a way to reverse the 
 * Dependency such that Order manager never has to worry about what 
 * type of Order sender we are using since they will all expose the 
 * send api
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
}())

const OrderManager = (function () {
  const OrderManager = function() {};

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
    (new OrderSender).send(order);
  };

  return OrderManager;
}());
