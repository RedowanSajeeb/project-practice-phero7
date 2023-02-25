const countrynameANdfirst = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => countrynameANdfirstCall(data))
}

const countrynameANdfirstCall = (lod) =>{
    lod.forEach(element => {

        const uwebLOdshow = document.getElementById('name-Desplay-section');
        const createElement = document.createElement('div');
        createElement.innerHTML = `

        <h1>country name: ${element.name}</h1>
        <p>capital: ${element.capital ? element.capital :'noCapital' }</p>
        
        `
        uwebLOdshow.appendChild(createElement);
    
        
    });
   
}


countrynameANdfirst();