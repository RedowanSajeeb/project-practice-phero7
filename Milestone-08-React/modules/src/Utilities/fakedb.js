const localFunction = (id) =>{
// console.log(id);
let stors = {}
const ckLocalStorage = localStorage.getItem("Stors-Local");
if(ckLocalStorage){
    stors = JSON.parse(ckLocalStorage)
}
else{
    stors = {}
}
// !---------------------------------
const locaklIDck = stors[id]
if(locaklIDck){
    stors[id] = locaklIDck +1
}
else{
    stors[id] = 1
}
localStorage.setItem('Stors-Local',JSON.stringify(stors))
}


export {localFunction}