function incomeinputBoxGetid(boxid){
    const boxGet = document.getElementById(boxid);
    const boxValueget = boxGet.value;
    const valuePure = parseFloat(boxValueget);
    return valuePure;
}
function getSetLocationIDCall(id,setvalue){
    const getSetLocation = document.getElementById(id);
    getSetLocation.innerText= setvalue ;

}