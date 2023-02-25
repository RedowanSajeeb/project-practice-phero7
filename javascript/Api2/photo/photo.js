function photoJson(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => photoSe(data))
}
    function photoSe(data){
        const divSet = document.getElementById('photo-div');
        for(const dataa of data){
            const div = document.createElement('div');
            div.classList.add('cssT')
            div.innerHTML = `
            <h1>albumId: ${dataa.albumId}1</h1>
            <h2>Id: ${dataa.id}1</h2>
            <h3>title": ${dataa.title}1</h3>
            <img src="${dataa.url}" alt="photo" width="500" height="600">
            
            <img src="${dataa.thumbnailUrl}" alt="photo" width="500" height="600">

            
            `
            divSet.appendChild(div);
        }
    }




photoJson();