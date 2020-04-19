//BUSINESS LOGIC

function Order(type, size, crust, topping) {
  this.type = type;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
}

Order.prototype.fullOrder = function () {
  return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
};

function Total(price, quantity, delivery) {
  this.price = price;
  this.quantity = quantity;
  this.delivery = delivery;
}

Total.prototype.finalTotal = function () {
  return this.price * this.quantity + this.delivery;
};


var sizePrice = [1400, 900, 500]
var deliverPrices = [0, 300];

//USER INTERFACE LOGIC

//CONTACT US FUNCTION

$('form#contactForm').submit(function (event) {
  event.preventDefault();
  var name = $('#name').val();
  var pass = $('#email').val();
  var mess = $('#message').val();
  alert("Hi " + name + " we have received your message and we will get in touch. Thank you for contacting us.");
});

