const loadCounties = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCounties(data));
};

const displayCounties = (countries) => {
  const countriesContainarDiv = document.getElementById("name-Desplay-section");
  countries.forEach((country) => {
    // console.log(country)

    const countraydiv = document.createElement("div");
    countraydiv.classList.add("cuntray");
    countraydiv.innerHTML = `
        
        <h1>country name: ${country.name.common} </h1>
        
        <h3>capital: ${
          country.capital ? country.capital[0] : "no-capital"
        } </h3>

        <button onClick="DesplayLoadDetails('${country.cca2}')">Show-me</button>
        
        `;
    countriesContainarDiv.appendChild(countraydiv);
  });
};

const DesplayLoadDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  console.log("dddd", url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => atlastShow(data[0]));

  const atlastShow = (paramitar) => {
    const cui = document.getElementById("show");
    cui.innerHTML = `
        <h2>country name: ${paramitar.name.common} </h2>
        <img src="${paramitar.flags.png}" alt="Image description">
       <div><img src="${paramitar.maps.openStreetMaps}" alt="Image description"></div> 
       

       <h2>country capital: ${paramitar.capital} </h2>
       <h2>country region: ${paramitar.region} </h2>

        
        `;
  };
};

loadCounties();
