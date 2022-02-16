const products = [
  {name:'iphone 14', price:90000},
  {name:'samsung galazy 14', price:70000},
  {name:'dell laptop', price:50000},
  {name:'lenvo yoga', price:55000},
  {name:'Asus vivobook laptop', price:850000},
  {name:'samsung watch', price:10000},
  {name:'apple watch', price:20000},
  {name:'one plus', price:35000},
];


/* 
for (let product of products) {
  if (product.price<15000) {
    break;
  }
  console.log(product);
} 
*/


for (let product of products) {
  if (product.price<50000) {
    continue;
  }
  console.log(product);
}
console.log('after the loop');