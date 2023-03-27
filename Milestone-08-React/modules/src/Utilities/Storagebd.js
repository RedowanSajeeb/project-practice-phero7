const localStrogaeFunction = (id) =>{
    const get = localStorage.getItem(id)
    console.log(get);
    if(get){
        const updateStorage = +get+1;
        localStorage.setItem(id, updateStorage);
    }
   else{
    localStorage.setItem(id, "1");
   }

}


export{localStrogaeFunction}