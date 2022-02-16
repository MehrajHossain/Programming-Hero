//2
function makeRed() {
  document.body.style.backgroundColor = 'red';
}




//3 handle blue button click by setting function name
const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}





//4 handle event using anonymous function
const greenButton = document.getElementById('make-green-button');

// anonymous function
greenButton.onclick = function () {
  document.body.style.backgroundColor = 'green';
}




//5 handle by using add eventlisenter
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod);

function makeGoldenRod() {
  document.body.style.backgroundColor = 'goldenrod';
}




//6 addEventListener 
const hotPinkButton = document.getElementById('make-hotpink');
hotPinkButton.addEventListener('click', function () {
  document.body.style.backgroundColor = 'hotpink';
})




//7 direct shortcut
document.getElementById('light-blue').addEventListener('click', function () {
  document.body.style.backgroundColor = 'lightblue';
})