class Order {
  constructor(customerId) {
    this.customerId = customerId;
    this.orderDate = new Date();
    this.items = [];
  }
}

class OrderSender {
  constructor() {}

  send(order) {
    // process order via network request
  }

  handleResponse(response) {
    return { status : 200, data: response };
  }

  handleError(err) {
    return { status: err.status, error: err };
  }
}

class OrderManager {
  constructor() {
    this.order = {};
  }

  createOrder(customerId) {
    this.order = new Order(customerId);
  }

  addItem(item) {
    this.order.items.push(item);
  }

  verifyOrder(order) {
    return order.items.length > 0;
  }

  sendOrder(order) {
    (new OrderSender()).send(order);
  }
}