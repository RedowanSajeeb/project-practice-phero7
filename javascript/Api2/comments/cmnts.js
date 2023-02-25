function commentsJson(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => dataCallFun(data))
}

function dataCallFun(datas){
    const divSection = document.getElementById('desplay-div-section');
    for(const data of datas){
        const cusTdiv = document.createElement('div');
        cusTdiv.innerHTML = `
        <h5>postId:${data.postId}</h5>
        <h2>id:${data.id}</h2>
        <h4>name:${data.name}</h4>
        <h5>email@:${data.email}</h5>
        <h3>body:${data.body}</h3>
        
        
        `
        divSection.appendChild(cusTdiv)
        

    }
}

commentsJson();