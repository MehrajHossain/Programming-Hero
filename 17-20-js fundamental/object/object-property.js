var computer = {
  price: 80000,
  processor: 'core i5',
  generation: '10th',
  ram: '8gb',
  hardDrive: '1TB',
  graphicsCard: 1650

}

console.log(computer);
//How to know about any property
console.log(computer.ram);

//or
computerRam = computer.ram;
console.log(computerRam);
console.log(computer["ram"]);



//Different ways to set a value of an object property 
var ramProperty = "ram";
computer.ram = '16gb';
computer["ram"] = '24gb';
computer[ramProperty] = '32gb';

