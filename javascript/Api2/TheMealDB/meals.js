const firstMealdbLoad = (serBoxText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serBoxText}`
  fetch(url)
  // fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")

    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealscontainer = document.getElementById("mealsContainer");
  // ----------------------
  mealscontainer.innerHTML = ' ';
// ----------------------------
  meals.forEach((meal) => {
    const divmeal = document.createElement("div");
    divmeal.classList.add("col");
    divmeal.innerHTML = `

    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title text-success">${meal.strMeal}</h4>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
        `

    mealscontainer.appendChild(divmeal);
  });
};

const mealsearearch = () =>{
  const seboxid = document.getElementById('example-search-input').value;
  const seboxidemt = document.getElementById('example-search-input')

  firstMealdbLoad(seboxid);

   seboxidemt.value = " ";
}




firstMealdbLoad();
