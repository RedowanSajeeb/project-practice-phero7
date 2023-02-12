const h2colorvar = document.getElementsByTagName('h2');
for( const elements of h2colorvar){
    elements.style.color = "lightblue";
}
// ---------------


const bgcolor = document.getElementById('backpack');
    bgcolor.style.backgroundColor ="tomato" ;
    bgcolor.style.paddingBottom = "35px" ;
// -----------------------



const cardstil = document.getElementsByClassName('card');
  for(const cardbr of cardstil){
    cardbr.style.borderRadius = '30px';
  }
//  -----------------


function functionbtn () {
  
    document.body.style.backgroundColor = "lightblue";
    
}
// -----------------parlam nah......

const allbtn = document.getElementsByClassName('btn panda-btn-buy-now');
    for(const onebtn of allbtn){
        document.getElementById(onebtn).addEventListener('click',function(event){
            const caraccses = document.getElementsByClassName('card');
            for(const carremove of event ){
                caraccses.style.display = 'none';
            }
        })
        
        
    }


    

    // -------------------------

    document.getElementById('InputEmail1').addEventListener('keyup',function(event){
        const inputfildTextDo = event.target.value;
        const btnpoint = document.getElementById('b');
        if(inputfildTextDo == "email"){
            btnpoint.removeAttribute('disabled');
        
        }
        else {
            btnpoint.setAttribute('disabled', true);
        }


    })


   
    
      
// document.getElementById('exampleInputEmail1').addEventListener('keyup',function(eventtxt){
//    const textin = eventtxt.target.value;

//     const btOneee  = document.getElementById('exampleInputbtn');
//     if(textin === 'email'){
//         btOneee.removeAttribute('disabled');
//     }
//     else {
//         btOneee.setAttribute('disabled', true);
//     }
    
// })
