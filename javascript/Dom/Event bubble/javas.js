//  const ulitms = document.getElementsByClassName('li-id');
//  for(const liItms of ulitms){
//     liItms.addEventListener('click',function(event){
//         event.target.parentNode.removeChild(event.target);

//     })
    
//  }
document.getElementById('ulID').addEventListener('click',function(event){
    event.target.parentNode.removeChild(event.target);
})



 document.getElementById('btn-add').addEventListener('click',function(){
    const listcontiner = document.getElementById('ulID');
    const liadd = document.createElement('h3');
    liadd.innerText = '>. Event delegate and benefit of Event bubble-bro';
    liadd.classList.add('li-id')
    listcontiner.appendChild(liadd);
    
 })
 