/**
 * In this programme, the Dog and Bird classes inherit all
 * methods of animal class but both have to copy extra interfaces
 * they don't use.
 * 
 * Dog => fly(); similarly Bird => bark()
 * Following the Interface segregation principle, we can rewrite
 * this programme to seperate concerns
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

Animal.prototype.fly = function() {
  console.log(this.name + ': is flying');
}

Animal.prototype.bark = function() {
  console.log(this.name + ': Woff woof...');
}

 /**
  * Dog class
  * @param {*} name 
  */
function Dog(name) {
  this.name = name;
}

Dog.prototype = Object.create(new Animal());

 /**
  * Bird class
  * @param {*} name 
  */
function Bird(name) {
  this.name = name;
}

Bird.prototype = Object.create(new Animal());