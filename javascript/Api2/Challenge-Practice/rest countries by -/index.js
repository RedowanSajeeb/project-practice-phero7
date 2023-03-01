// ---------------------------
const commonFuntion = async (jsonDanamix) => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  const url = `https://restcountries.com/v3.1/region/${jsonDanamix}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    commonFuntionaDesplayShow(data);
  } catch (error) {}
};

commonFuntion('asia')


const commonFuntionaDesplayShow = (africas) => {
  console.log(africas);
  africas.forEach((africa) => {
    // console.log(africa.name);
    const showParentIDdiv = document.getElementById(
      "panelsStayOpen-collapseOne"
    );
    // showParentIDdiv.innerText = "";
    const divMakes = document.createElement("div");
    divMakes.classList.add("row", "col-lg-3", "lg-g-3");

    divMakes.innerHTML = `
<div class ="lg-m-2 p-2  bg-body-secondary border rounded-1">
        <h5 class=""> ${africa.name.common}
        <img class ="img-fluid mt-2 p-2" src="${africa.flags.png}" alt="Girl in a jacket" ></h5>
        <h5 class="">region: ${africa.region}</h5>
</div>
        
        
        
    
        `;
    showParentIDdiv.appendChild(divMakes);
  });
};
// myAfrica();
const myAfrica = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("Africa");
};

// myAmericas
const myAmericas = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("Americas");
};

// myAsia
const myAsia = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("Asia");
};
// myEurope
const myEurope = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("Europe");
};

// myOceania
const myOceania = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("Oceania");
};
