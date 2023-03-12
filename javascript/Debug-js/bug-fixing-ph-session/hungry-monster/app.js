
//------------- handle search button-----------
const searchFood = (cake) => {
    const searchField = document.getElementById('mealInput');
   const  searchtEXT = searchField.value
    if(searchField.value === ""){
        document.getElementById("errorMessage").innerText = "তুমি কিছু লিখো নাই 🙄"
        return
    }
    else if(searchField)
    searchField.value="" 
    // const searchData = searchField.value     
    // displayMealInfo.innerText="";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtEXT}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealInfo(data.meals))
    .catch(error =>{
        document.getElementById("errorMessage").innerText = "আজাইরা খোঁজা-খুঁজি বাদ দিয়া ঘুমাও 😐"
    })
    document.getElementById('mealInput').value = "";
            errorMessage.innerText = "";
}

const displayMealInfo = mealData => {
    
    // console.log(mealData);
    // displayMealInfo.innerText="";
    const mealContainer = document.getElementById('mealCard');
    mealContainer.innerText ="";
    mealData.forEach(item => {
        
        const foodItemName = document.createElement('div');
        
        foodItemName.className = 'meal-items';
        itemPosition = item.idMeal;
        const mealInformation = `
        <img src ="${item.strMealThumb}">
        <h3>${item.strMeal}</h3>
        `
        foodItemName.innerHTML = mealInformation;
        foodItemName.addEventListener('click', function () {
            mealIngredientsInfo(item.idMeal);
        });
        mealContainer.appendChild(foodItemName);
    });
    
}


//API Call by fetch for meal ingredients 

const mealIngredientsInfo = mealItemName => { 
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.meals))
        
}

//meal ingredients details information

const displayDetails = mealItemDetails => {
    // console.log(mealItemDetails);
    const mealItemsInformation = document.getElementById('mealItemsInfo');
    mealItemsInformation.innerText="";
    mealItemDetails.forEach(items => {
        // console.log(items);
       
        const mealItemsInformations = document.createElement('div');
        mealItemsInformations.className = 'ingredients-info';
        // console.log(items.strMeal);
        const itemsName = document.createElement('h1');
        const ingredients = document.createElement('h5');
        ingredients.innerText = 'Ingredients';
        itemsName.innerText = items.strMeal;
        const ul = document.createElement('ul');
        const imgUrl = document.createElement('img');
        imgUrl.src = items.strMealThumb;
        mealItemsInformations.appendChild(imgUrl);
        const li = `
        
         <li>${items.strIngredient1}</li>
         <li>${items.strIngredient2}</li>
         <li>${items.strIngredient3}</li>
         <li>${items.strIngredient4}</li>
         <li>${items.strIngredient5}</li>
         <li>${items.strIngredient6}</li>
         <li>${items.strIngredient7}</li>
         <li>${items.strIngredient8}</li>
         <li>${items.strIngredient9}</li>
         <li>${items.strIngredient10}</li>
         <li>${items.strIngredient11}</li>
         <li>${items.strIngredient12}</li>
         <li>${items.strIngredient13}</li>
        `
        ul.innerHTML = li;
//         Object.values(items).forEach((ingredient) => {
//   if (ingredient && ingredient.startsWith('strIngredient')) {
//     const li = document.createElement('li');
//     li.textContent = ingredient;
//     ul.appendChild(li);
//   }
// });
        mealItemsInformations.appendChild(itemsName);
        mealItemsInformations.appendChild(ingredients);
        mealItemsInformations.appendChild(ul);
        mealItemsInformation.appendChild(mealItemsInformations);

    });

}


