class Discounter {
  constructor(min, max, discount) {
    this.min = min;
    this.max = max;
    this.discount = discount / 100;
  }

  isApplicable(order) {
    return order.items.length >= this.min && order.items.length <= this.max;
  }

  applyDiscount(order) {
    if (this.isApplicable(order)) {
      order.totalAmount = order.totalAmount - (order.totalAmount * this.discount);
    }
  }
}

class AmountDiscounter extends Discounter {
  constructor(min, max, discount) {
    super(min, max, discount);
  }

  // this breaks LSP
  isApplicable(order) {
    return order.totalAmount >= this.min && order.totalAmount <= this.max;
  }
}