//by arrow functionn
const loadQuotes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data));
};

const displayQuote = (quotation) => {
  const quoteElement = document.getElementById("quote");
  quoteElement.innerText = quotation.quote;
};


/* 

//by function
function loadQuotes(){
  fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
};


 function displayQuote(data)  {
  const quoteElement = document.getElementById('quote');
  quoteElement.innerText = data.quote;
}; 

 */

