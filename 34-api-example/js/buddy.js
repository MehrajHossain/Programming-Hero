const loadBuddies = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(data => displayBuddies(data))
};
loadBuddies();
const displayBuddies = (data) => {
  const buddies = data.results;
  console.log(data);
  const buddiesDiv = document.getElementById('buddies');
  for (const dude of buddies) { 
    const dudeDiv = document.createElement('div')
    dudeDiv.innerHTML = `
   <h4>Name: ${dude.name.first} ${dude.name.last}</h4> 
    Email: ${dude.email} 
    `;
    buddiesDiv.appendChild(dudeDiv);
    console.log(dude.email);
    
  }
   
};