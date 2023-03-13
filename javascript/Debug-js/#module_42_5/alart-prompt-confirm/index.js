const button = () =>{
  const promptInput = parseInt( prompt(" একটা সংখ্যা নাও")) ;
  
  const calculation =  promptInput + 200 ;
  alert (calculation)
}
// -----
const myConfirm  = () =>{
 
const urlLIb = confirm ("Press a button!\nEither OK or Cancel.");
if(urlLIb === true){
 alert(location);
/*  window.location
 location.href */
}

}