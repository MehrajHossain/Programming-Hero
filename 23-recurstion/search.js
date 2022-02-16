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
function searchProducts(produts, searchText) {
  const result = [];
 
  for (let product of products) {
    if (product.name.includes(searchText)) {
      result.push(product);
    }
  }
  return result;
}
console.log(searchProducts(products,'watch'));


