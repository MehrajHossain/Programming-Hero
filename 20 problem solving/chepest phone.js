const phones = [
  {name: 'samsung s9', price: 45000, camera: 48, storge: 12},
  {name: 'xiaomi m3', price: 19500, camera: 24, storge: 6},
  {name: 'oppo a2', price: 17000, camera: 24, storge: 8},
  {name: 'walton m32', price: 15000, camera: 12, storge: 3},
  {name: 'nokia n95', price: 24000, camera: 12, storge: 8},
  {name: 'htc h81', price: 16999, camera: 13, storge: 4}
];

let cheapest = phones[0];
for (const phone of phones) {
  //compare only price
    if(phone.price<cheapest.price) {
      cheapest = phone;
    }
}
console.log(cheapest);