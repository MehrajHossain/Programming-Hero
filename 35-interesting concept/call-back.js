
// কোনে একটা ফাংশনের মধ্যে প্যারামিটার আকারে একটা ফাংশন থাকলে এই ফাংশন কে মূল ফাংশনের মধ্যে কল করা হলে এই ফাংশন কে কলব্যাক ফাংশন বলা হয়


function welcomeMessage(name, greetHandler) {
greetHandler(name); // callback
}


// const names = ['Tom Hanks', 'Tom Brady', 'Tom Cruise'];
// const myObj = {name: 'Tom Chinke', age:11};

function greetMorning(name) {
  console.log('Good morning', name);
}
 
function greetAfternoon(name) {
  console.log('Good afternoon', name);
}
 
function greetEvening(name) {
  console.log('Good evening', name);
}
 

welcomeMessage('Tom Hanks', greetMorning);
welcomeMessage('Shakib Hanks', greetAfternoon);
welcomeMessage('Bappa Raj', greetEvening);















function handleClick() {
    console.log('button is clicked');
}


document.getElementById('my-btn').addEventListener('click,handleClick')





document.getElementById('btn').addEventListener('click',function(){
  console.log('button is clicked');
})