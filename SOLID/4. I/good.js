/**
 * In this new programme, the Dog and Bird classes still inherit from
 * class animal class but both no longer have to copy unused interfaces
 */

 /**
  * Animal super class
  * @param {*} name 
  */
function Animal(name) {
  this.name = name;
}

Animal.prototype.sleep = function() {
  console.log(this.name + ': Zzz...');
}

/**
 * Dog class
 * @param {*} name 
 */
function Dog(name) {
  this.name = name;
}

Dog.prototype = Object.create(new Animal());

Dog.prototype.bark = function() {
  console.log(this.name + ': Woff woof...');
}


/**
 * Bird class
 * @param {*} name 
 */
function Bird(name) {
  this.name = name;
}

Bird.prototype = Object.create(new Animal());

Bird.prototype.fly = function() {
  console.log(this.name + ': is flying');
}
