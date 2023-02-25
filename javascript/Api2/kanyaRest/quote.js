const quote1 = () =>{
    fetch('https://api.kanye.rest/')
    .then(reas => reas.json())
    .then(data => data2(data))
}

const data2 = data2 =>{
    const urlSetQuote = document.getElementById('quote');
    // console.log(data2);
    urlSetQuote.innerHTML = `
    <h1>${data2.quote}</h1>
    
    ` 
}




quote1();