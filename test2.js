const loadData = () => {
const url = `link`;
fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
};
loadData();


const displayData = data => { 
  const dataDiv = document.getElementById('div-id'); 
    data.forEach(entry => {
    console.log(entry);
        
  })
};