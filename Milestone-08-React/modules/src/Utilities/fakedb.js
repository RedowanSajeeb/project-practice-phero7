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
// !=====================================!remove

const removeFun =(id) =>{

    const ckbd = localStorage.getItem("Stors-Local");
    if(ckbd){
        const dbparse = JSON.parse(ckbd);
        if( id in dbparse){
            delete dbparse[id];
            localStorage.setItem("Stors-Local", JSON.stringify(dbparse));
        }
    }

} 

export {localFunction,removeFun}