// const restCountriesLoad = async () =>{
//     const url = `https://restcountries.com/v3.1/region/`
//     try{
//         const res = await fetch(url);
//         const data = await res.json();
//         console.log(data);

//     }
//     catch(error){

//     }
// }
// const restCountriesLoad();
// ---------------------------
const myAfrica = async () =>{
    const url = `https://restcountries.com/v3.1/region/africa`
    try{
        const res = await fetch(url);
        const data = await res.json();
        africaDesplayShow(data);

    }
    catch(error){

    }
}
// myAfrica();
const africaDesplayShow = (africas) =>{
    console.log(africas);
    africas.forEach(africa => {
        // console.log(africa.name);
        const showParentIDdiv = document.getElementById('panelsStayOpen-collapseOne');
        const divMakes = document.createElement('div');
        divMakes.classList.add('row','col-lg-3','lg-g-3')
       
        divMakes.innerHTML = `
        <h5 class="lg-m-2 p-2  bg-body-secondary border rounded-1"> ${africa.name.common}</h5>
    
        `
        showParentIDdiv.appendChild(divMakes)
    });
    

}