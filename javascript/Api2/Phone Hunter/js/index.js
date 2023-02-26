const phonsLoadHunt = async (phoneSearchBox, dataLemit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${phoneSearchBox}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhonesHunts(data.data, dataLemit);
};
const displayPhonesHunts = (phones, dataLemit) => {
  const phoneContainar = document.getElementById("phoneContainner");
  phoneContainar.textContent = "";
  const showAll = document.getElementById("btn-show-all");
  if (dataLemit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }

  /* desplay-30+Phones onaly *
    // -------------------------------------
    /* -------------error--no-phone */
  const dblocPage = document.getElementById("d-bloc-section");
  if (phones.length === 0) {
    dblocPage.classList.remove("d-none");
  } else {
    dblocPage.classList.add("d-none");
  }
  // ------------------------
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `

        <div class="card p-4">
        <img  src="${phone.image}" class=" img-fluid p-5" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
         
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onclick="loadPhoneDtiles('${phone.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phonehUndModel">ShowMore...</button>
          </div>
      </div>
        `;
    phoneContainar.appendChild(phoneDiv);
  });
  /* spinner-loder-stop */
  spinnerLoder(false);
};

const prossesSearch = (dataLemit) => {
  spinnerLoder(true);
  const seachinputValu = document.getElementById("example-search-input").value;
  phonsLoadHunt(seachinputValu, dataLemit);
};
document.getElementById("btn-click").addEventListener("click", function () {
  /*  spinner-loder-start */
  prossesSearch(10);
  // const emtay = document.getElementById('example-search-input')

  // emtay.value = " ";

});
//   javascript input field enter key event handle
document.getElementById('example-search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      prossesSearch(10);
    }
});

/*     spinner-loder
 */
const spinnerLoder = (loder) => {
  const spinnerSection = document.getElementById("spinner-loder");
  if (loder) {
    spinnerSection.classList.remove("d-none");
  } else {
    spinnerSection.classList.add("d-none");
  }
};
// -----------
// btn-show-all
document.getElementById("btn-show-btn").addEventListener("click", function () {
  prossesSearch();

  const emtay = document.getElementById("example-search-input");
  emtay.value = " ";
});


const loadPhoneDtiles = async id =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    loadPhoneDtilesdesplay(data.data);


}
const loadPhoneDtilesdesplay = phone => {
    document.getElementById('phonehUndModelLabel').innerText = phone.name;
    document.getElementById('phonehUndModelLabel2').innerText = phone.releaseDate ? phone.releaseDate :"CommingSoon..." ;
    document.getElementById('phonehUndModelLabel3').innerText = phone.mainFeatures.storage ? phone.mainFeatures.storage:"faka" ;
    document.getElementById('phonehUndModelLabel4').innerText = phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize :"faka" ;
    document.getElementById('phonehUndModelLabel5').innerText = phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet :"faka" ;
    document.getElementById('phonehUndModelLabel6').innerText = phone.mainFeatures.memory ? phone.mainFeatures.memory:"faka" ;

}


phonsLoadHunt("a");
