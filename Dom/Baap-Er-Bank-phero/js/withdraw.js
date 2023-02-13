// step-1
document.getElementById('withdraw-Btn').addEventListener('click',function(){
    const withdrawBtnGetid = document.getElementById('user-Withdraw-inputNumber');
    const withdrawValueCount = withdrawBtnGetid.value;
    const withdrawPastFlod = parseFloat(withdrawValueCount);
    

    const withdrawFildfirst = document.getElementById('withdraw');
    const withdrawinnerTextNumber = withdrawFildfirst.innerText;
    const withdrawCurntBlanceString = parseFloat(withdrawinnerTextNumber);

    const totalWithdraw = withdrawCurntBlanceString + withdrawPastFlod;
    withdrawFildfirst.innerText = totalWithdraw;
    // ---------------------

    // total-blance--------------------------------------------
    const blanceFirstAmmount = document.getElementById('balance');
    const blanceAmmountString = blanceFirstAmmount.innerText;
    const blancAtlest = parseFloat(blanceAmmountString);

    const lestCulculation = blancAtlest - withdrawPastFlod;
     blanceFirstAmmount.innerText = lestCulculation;



    withdrawBtnGetid.value = " ";
 
})