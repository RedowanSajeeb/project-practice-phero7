const firstMealdbLoad = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=cake")
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealscontainer = document.getElementById("mealsContainer");

  meals.forEach((meal) => {
    const divmeal = document.createElement("div");
    divmeal.classList.add("col");
    divmeal.innerHTML = `

    <div class="card h-100">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
        
        `;

    mealscontainer.appendChild(divmeal);
  });
};

firstMealdbLoad();
