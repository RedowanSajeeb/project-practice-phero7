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
    



    withdrawBtnGetid.value = " ";
 
})