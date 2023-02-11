
document.getElementById('inputBoxJs').addEventListener('keyup',function(eventtext){
     const textConf = eventtext.target.value;
       const  confmBtndlt = document.getElementById('inputBtnJs');
        if(textConf === 'redowan'){
            confmBtndlt.removeAttribute('disabled');

        }
        else {
            confmBtndlt.setAttribute('disabled', true);
        }
})

document.getElementById('inputBtnJs').addEventListener("click",function(){
    const dltsectionText = document.getElementById('dlt-sectionJs');
     dltsectionText.style.display ='none';

})