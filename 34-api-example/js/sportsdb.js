const loadCountries = () => {

  const url = `https://www.thesportsdb.com/api/v1/json/2/all_countries.php`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data.countries))
};

loadCountries();

// displayCountries();
const displayCountries = countries => {
  const countriesDiv = document.getElementById('countries');
  countries.forEach(country => {
    console.log(country);
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
    <h3>${country.name_en}</h3>
    
  `;
    countriesDiv.appendChild(div);



  });

};