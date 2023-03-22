const restDataApiLoad = async() =>{
    const url = `https://restcountries.com/v3.1/all`;
    const response = await fetch(url);
    const data = await response.json();
    datadisplayShow(data)
}

const datadisplayShow = data =>{
    console.log(data[0]);
    const cuntryHtml = data.map(count => htmkFuntion(count));
    const countRyContainer = document.getElementById("div-containar");
    countRyContainer.innerHTML = cuntryHtml.join(" ")

}
const htmkFuntion = (count) =>{
    return `
    <div>
     <h1>${count.capital}</h1>
     <img src="${count.flags.png}">
    </div>
    
    `;
}

restDataApiLoad();