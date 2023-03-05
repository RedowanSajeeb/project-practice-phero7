const loadTamdatacall = async (cityname) => {
  const aPI_kEY = `39c7157404dfef5b3f298ee24a628038`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${aPI_kEY}&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    loadTamdatacallShowDisplay(data);
  } catch (error) {
    console.log(error);
  }
};
const loadTamdatacallShowDisplay = (tamDdata) => {
  // console.log(tamDdata);
  setFuncation("tamC", tamDdata.main.temp);
  setFuncation("wmain", tamDdata.weather[0].main);

  setFuncation("city", tamDdata.name);

  //   const tamC = (document.getElementById("tamC").innerText = tamDdata.main.temp);
  //   document.getElementById("wmain").innerText = tamDdata.weather[0].main;
};

const setFuncation = (id, text) => {
  const temp = document.getElementById(id);
  temp.innerText = text;
};

document.getElementById("search-btn").addEventListener("click", function () {
  const inputvalu = document.getElementById("location-input").value;
  loadTamdatacall(inputvalu);
//   document.getElementById("city").innerText = inputvalu;
  document.getElementById("location-input").value = "";
});

loadTamdatacall("dhaka");
