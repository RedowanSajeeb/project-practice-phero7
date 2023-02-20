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
// -----------------......
  document.getElementsByClassName('panda-btn-buy-now').addEventListener('click',function(event){
    const byNows = document.getElementsByClassName('panda-btn-buy-now');
    for(const byNow of byNows){
    console.log(byNow)
    }
  })


// const allbtn = document.getElementsByClassName('btn panda-btn-buy-now');
//     for(const onebtn of allbtn){
//         document.getElementById(onebtn).addEventListener('click',function(evnet){
//             const remove = evnet.target.parentNode
//             const caraccses = document.getElementsByClassName('card');
//             for(const carremove of remove ){
//                 carremove.style.display = 'none';
//             }
//         })
        
        
//     }
 

    

    // -------------------------

    document.getElementById('dlt-xonfm').addEventListener('keyup',function(evnet){
        const text = evnet.target.value;
        console.log(text);
    })

    // document.getElementById('InputEmail1').addEventListener('keyup',function(event){
    //     const inputfildTextDo = event.target.value;
    //     const btnpoint = document.getElementById('bUTTONID');
    //     if(inputfildTextDo == "email"){
    //         btnpoint.removeAttribute('disabled');
        
    //     }
    //     else {
    //         btnpoint.setAttribute('disabled', true);
    //     }


    // })


   
    
      
document.getElementById('exampleInputEmail1').addEventListener('keyup',function(event){
    const sumibtn = document.getElementsByClassName('disabledBtn');
   const inputText = event.target.value;
    if(inputText === 'email'){
        sumibtn.removeAttribute('disabled');
    }
    else {
        sumibtn.setAttribute('disabled', true);
    }
    
})

// ----------------
//  document.getElementById('subscribe').addEventListener('dblclick',function(){
//   this.style.backgroundColor = 'pink';
    
//  })
document.getElementById('subscribe').addEventListener('dblclick', function(){
    // console.log('click porse');
    this.style.backgroundColor = 'red';
})