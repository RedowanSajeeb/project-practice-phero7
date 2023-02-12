
document.getElementById('inputBoxJs').addEventListener('keyup',function(eventtext){
     const textConf = eventtext.target.value;
     
     
       const  confmBtndlt = document.getElementById('inputBtnJs');
        if(textConf === 'redowan'){
            confmBtndlt.removeAttribute('disabled');

        }
        else if(textConf === 'sajeeb'){
            confmBtndlt.style.display = 'block';
        }
        else {
            confmBtndlt.setAttribute('disabled', true);
        }
        
})

document.getElementById('inputBtnJs').addEventListener("click",function(){
    const dltsectionText = document.getElementById('dlt-sectionJs');
     dltsectionText.style.display ='none';
     
     const valoremor = document.getElementById('inputBoxJs');
     valoremor.value = " ";
})


// ----------------
document.getElementById('inputBoxJs').addEventListener('keyup',function(eventtext){
    const textConf = eventtext.target.value;
      const  confmBtndlt = document.getElementById('inputBtnJs');
       if(textConf === 'sajeeb'){
           confmBtndlt.removeAttribute('none');

       }
    
       else {
           confmBtndlt.setAttribute('non', true);
       }
})
document.getElementById('inputBtnJs').addEventListener("click",function(){
    const dltsectionText = document.getElementById('dlt-sectionJs');
     dltsectionText.style.display ='none' ;

})
// -----------