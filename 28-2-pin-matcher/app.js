function getPin() {
  
   pin = Math.round(Math.random()*10000);
  if(pin>999) {
    return pin;
    
  }
  else {
    // console.log('got 3 digit and calling again');
    return getPin();
  }
   
}


function generatePin() {
  const pin = getPin();
  document.getElementById('display-pin').value = pin;
   

}

document.getElementById('key-pad').addEventListener('click', function(event){
  const number = event.target.innerText;
  const calcInput = document.getElementById('typed-numbers');
  if (isNaN(number)) {
    if (number == 'C') {
      calcInput.value = ''
    }
  } 
  else {

    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
  });


function verifyPin() {
  const pin = document.getElementById('display-pin').value;
  const typedNumbers = document.getElementById('typed-numbers').value;
  const correctPin = document.getElementById('correct-pin');
  const errorPin = document.getElementById('error-pin');
   if (pin == typedNumbers) {
    correctPin.style.display = 'block';
    errorPin.style.display = 'none';
  }
  else {
    errorPin.style.display = 'block';
    correctPin.style.display = 'none';
   }
   

}
