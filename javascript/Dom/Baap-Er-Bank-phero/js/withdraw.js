// step-1
document.getElementById('withdraw-Btn').addEventListener('click',function(){
    const withdrawBtnGetid = document.getElementById('user-Withdraw-inputNumber');
    const withdrawValueCount = withdrawBtnGetid.value;
    const withdrawPastFlod = parseFloat(withdrawValueCount);

    if (isNaN(withdrawPastFlod)) {
        alert('Not a Number!plz-input a Number');
        return ;
      }
    const withdrawFildfirst = document.getElementById('withdraw');
    const withdrawinnerTextNumber = withdrawFildfirst.innerText;
    const withdrawCurntBlanceString = parseFloat(withdrawinnerTextNumber);

    withdrawBtnGetid.value = " ";
// ------------ebd-----
    if(withdrawPastFlod < 1){
        alert('Hye-Bro Eroor');
        return;
     }
    //  ---------------
    
    // ---------------------
 


    // total-blance--------------------------------------------
    const blanceFirstAmmount = document.getElementById('balance');
    const blanceAmmountString = blanceFirstAmmount.innerText;
    const blancAtlest = parseFloat(blanceAmmountString);

if(withdrawPastFlod > blancAtlest){
    alert('hey-Bro-Tamo$');
    return;
}
// -----------------------------------------
    const totalWithdraw = withdrawCurntBlanceString + withdrawPastFlod;
    withdrawFildfirst.innerText = totalWithdraw;

// -----------------------------------------

    const lestCulculation = blancAtlest - withdrawPastFlod;
     blanceFirstAmmount.innerText = lestCulculation;

 
})