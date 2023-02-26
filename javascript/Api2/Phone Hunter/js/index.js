const phonsLoadHunt = async(phoneSearchBox) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneSearchBox}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhonesHunts(data.data);
}

const displayPhonesHunts = phones =>{
    const phoneContainar = document.getElementById('phoneContainner');
    phoneContainar.textContent ="";
    phones = phones.slice(0,25);
    /* desplay-30+Phones onaly *
    // -------------------------------------
    
    /* -------------error--no-phone */
   const dblocPage = document.getElementById('d-bloc-section');
     if(phones.length === 0){
        dblocPage.classList.remove('d-none')
     }
     else{
        dblocPage.classList.add('d-none')
     }
// ------------------------
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `

        <div class="card p-4">
        <img  src="${phone.image}" class=" img-fluid p-5" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
        phoneContainar.appendChild(phoneDiv)

    });
}
document.getElementById('btn-click').addEventListener('click', function(){
    const seachinputValu = document.getElementById('example-search-input').value;
    const emtay = document.getElementById('example-search-input')
    phonsLoadHunt(seachinputValu);

    emtay.value = " ";
});

    
   








phonsLoadHunt('a');