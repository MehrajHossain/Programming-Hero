//JavaScript Object Notation(JSON)

const user = { id:11, name: 'Gorib Amir', job: 'actor'};
const stringfied = JSON.stringify(user);
//  console.log(user);
//  console.log(stringfied);

 const shop = {
   name: 'Alia Store',
   address: 'Ranbir road',
   products: ['laptop', 'android', 'iphone', 'cold-drink'],
   profit: 50000,
   owner: {
     name: 'alia',
     age: 22,
     father: 'mohesh butt',
     isFemale: true
   },
   isExpensive: false
 };
 const shopStringfied = JSON.stringify(shop);
//  console.log(shop);
 console.log(shopStringfied);
 const converted = JSON.parse(shopStringfied);
 console.log(converted);
  
 
  
  
