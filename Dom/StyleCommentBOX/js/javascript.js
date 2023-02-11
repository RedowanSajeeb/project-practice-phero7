document.getElementById('btn-jsID').addEventListener('click', function(){
   document.body.style.backgroundColor = '#181818';
   const commentBoxArea = document.getElementById('commentBoxJsID');
   const cmntBoxArea = commentBoxArea.value;

   const commentAddSection = document.getElementById('commentAdd-jsID');
   const pTagtext = document.createElement('p');
   pTagtext.innerText = cmntBoxArea;
   commentAddSection.appendChild(pTagtext);
   commentBoxArea.value = ' ';

    document.addEventListener('mouseup',function(){
    document.body.style.backgroundColor = '#FFF';

   })

})