const firstMealdbLoad = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
    .then(res => res.json())
    .then(data => cakeDataWebsiteShow(data))
}

const cakeDataWebsiteShow = meals =>{

    const mealscontainer = document.getElementById('mealsContainer');

    meals.forEach(meal => {
        console.log(meal);
        const mealDIv = document.createElement('div');
        mealDIv.classList.add('col');
        mealDIv.innerHTML = `
        <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
        
        `
        mealscontainer.appendChild(mealDIv)
        
    });
        

    
    

}


firstMealdbLoad();