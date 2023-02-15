document.getElementById('deposit-Btn').addEventListener('click',function(){
   
    
    const firstTakaInput = inputValueUserBox('user-Deposit-inputNumber');
    if (isNaN(firstTakaInput)) {
        return;
      }
    const depositidFuncionCall = innerTextFunction('deposit');
    const depositTotalTaka = depositidFuncionCall + firstTakaInput;

    valueSetFuntion('deposit', depositTotalTaka);

    const firstBalanceSection = innerTextFunction('balance');
    const TotalFirstBlance = firstBalanceSection + firstTakaInput;
    valueSetFuntion('balance', TotalFirstBlance);


})