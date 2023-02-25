const dataLoad = () =>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => randomuser(data))

}
 const randomuser = (data) =>{
    const name = document.getElementById('nameUser');
    name.innerText = data.results[0].name.title + ' '+ 
    data.results[0].name.first +' '+ data.results[0].name.last

    const phx = document.getElementById('photox');
    const img = document.createElement('div');

    img.innerHTML = `
    
    <img src="${data.results[0].picture.large}" alt="">
    `
    phx.appendChild(img);
   
 }




 dataLoad();