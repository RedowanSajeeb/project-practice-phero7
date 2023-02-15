document.getElementById('Submit-button').addEventListener('click',function(){
    const emailUser = document.getElementById('user-email-input');
    const email = emailUser.value;
    
    const passUser = document.getElementById('user-password-input');
    const  password = passUser.value;
    if(email == "baaperbank$Rdo@gmail.com" && password ==='redowan'){
        window.location.href = 'bankindex.html'
        
    }
    else{
        alert("InvalidBro");
    }
})