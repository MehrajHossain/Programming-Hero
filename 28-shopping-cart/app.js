/* 
document.getElementById('case-plus').addEventListener('click', function(){
  const caseInput = document.getElementById('case-number');
  let caseNumber = caseInput.value;
  caseNumber = parseInt(caseNumber) + 1;
  caseInput.value = caseNumber;  
});

document.getElementById('case-minus').addEventListener('click', function(){
  const caseInput = document.getElementById('case-number');
  const caseNumber = caseInput.value;
  if (caseNumber>0){
    
    caseInput.value = parseInt(caseNumber) - 1;
    console.log(caseNumber);
  }
  
}) 

*/







function updateProductNumber(product, isIncreasing, price) {
  const productInput = document.getElementById(product+'-number');
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    
    productNumber = parseInt(productNumber) + 1;
  }
  else if(productNumber>0){
    
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update product total
  const productTotal = document.getElementById(product+'-total');
  productTotal.innerText = productNumber * price;
  // calculate total
  calculateTotal();

};

function getInputValue(product) {
  const productInput = document.getElementById(product + '-number');
  const productNumber = parseInt(productInput.value);
  return productNumber;
  
};


function calculateTotal() {
   
   const phoneTotal = getInputValue('phone') * 1219;
   const caseTotal = getInputValue('case') * 59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalPrice = subTotal + tax;

  //update on the html
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-price').innerText = totalPrice;
    
    
    
     
}



// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
  updateProductNumber('phone', true, 1219);
});
document.getElementById('phone-minus').addEventListener('click', function () {
  updateProductNumber('phone', false, 1219);
});



// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
  updateProductNumber('case',true, 59);
});
document.getElementById('case-minus').addEventListener('click', function () {
  updateProductNumber('case', false, 59);
});
