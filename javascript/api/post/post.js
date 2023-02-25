function apiDataLodeCall(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => functiondata(data))

}
function functiondata(posts){
    const divSection = document.getElementById('Post-Div');
    
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('posts')
        div.innerHTML = `
        <p>userId:<small> ${post.userId}</small></p>
        <h3>Id: ${post.id}</h3>
        <h1>title: ${post.title}</h1>
        <h4>body: ${post.body}</h4>
        
        `
        divSection.appendChild(div);

    }
}


apiDataLodeCall();