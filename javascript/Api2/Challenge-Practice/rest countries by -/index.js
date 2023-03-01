// ---------------------------
const commonFuntion = async (region, jsonDanamix) => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  const url = `https://restcountries.com/v3.1/${region}/${jsonDanamix}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    commonFuntionaDesplayShow(data);
  } catch (error) {}
};

commonFuntion("region",'asia')


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
        <img class ="img-fluid mt-2 p-2" src="${africa.flags.png}" alt="xphoto" ></h5>
        <h5 class="">region: ${africa.region}</h5>
</div> 
        `
    showParentIDdiv.appendChild(divMakes);
  });
};
// myAfrica();
const myAfrica = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("region","Africa");
};

// myAmericas
const myAmericas = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("region","Americas");
};

// myAsia
const myAsia = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("region","Asia");
};
// myEurope
const myEurope = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("region","Europe");
};

// myOceania
const myOceania = async () => {
  const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
  showParentIDdiv.innerHTML = "";
  commonFuntion("region","Oceania");
};


// cityBtn
const mylima = async () => {
    const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
    showParentIDdiv.innerHTML = "";
    commonFuntion("capital","lima");
  };
//   span 

const span = async () => {
    const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
    showParentIDdiv.innerHTML = "";
    commonFuntion("lang","spa");
  };
//   german
const german = async () => {
    const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
    showParentIDdiv.innerHTML = "";
    commonFuntion("lang","german");
  };
//   Peruánská
const pero = async () => {
    const showParentIDdiv = document.getElementById("panelsStayOpen-collapseOne");
    showParentIDdiv.innerHTML = "";
    commonFuntion("translation","Peruánská");
  };