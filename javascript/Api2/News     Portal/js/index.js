const neWesoadNewsfirst = async () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try{
        const res = await fetch(url);
        const data = await res.json();
        newsCatagoriShow1(data.data);
    }
    catch(error){
        console.log(error);
    }
}

const newsCatagoriShow1 = (data) =>{
    const catagoriShow = document.getElementById('catagori-show');
    data.news_category.forEach(news => {
        // console.log(news);
        catagoriShow.innerHTML += `<a onclick ="categoryo('${news.category_id}',' ${news.category_name}')" class="nav-link" href="#">${news.category_name}</a>`
        
    });
}

// categoryO

const categoryo = async (category_id, category_name) =>{
    // console.log(category_id);

    const url = `https://openapi.programming-hero.com/api/news/${category_id}`
    // console.log(url);
    
    try{
        const res = await fetch(url);
        const data = await res.json();
        newsCatagoriShow2(data , category_name);
    }
    catch(error){
        console.log(error);
    }

    const newsCatagoriShow2 = (data, category_name) =>{
        console.log(data ,category_name);
        document.getElementById('items').innerHTML = category_name
    }

}
// neWesoadNewsfirst();