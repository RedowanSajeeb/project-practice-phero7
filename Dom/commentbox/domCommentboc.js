 document.getElementById("sum-btn").addEventListener('click', function(){
    const commentBoxFild = document.getElementById('commentT-box');
    const CommentNewME = commentBoxFild.value;
    
    const ComeentPOst = document.getElementById('ComeentPOst');
    const h1 = document.createElement('h1');
    h1.innerText = CommentNewME;
    ComeentPOst.appendChild(h1);
    commentBoxFild.value = " ";

    
    
 })