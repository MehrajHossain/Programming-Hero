const products = [
  {name: 'laptop', price: 43800, quantity: 1},
  {name: 'shirt', price: 500, quantity: 8},
  {name: 'watch', price: 3680, quantity: 3},
  {name: 'phone', price: 55000, quantity: 1}
];

let totalPrice = 0;
for (const cart of products) {
  totalPrice = totalPrice + cart.price * cart.quantity;
}
console.log(totalPrice);