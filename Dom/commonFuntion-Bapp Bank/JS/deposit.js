document.getElementById('deposit-Btn').addEventListener('click',function(){
   
    // if (isNaN('deposit-Btn')) {
    //     alert('Not a Number!plz-input a Number');
    //     return;
    //   }
    const firstTakaInput = inputValueUserBox('user-Deposit-inputNumber');
    const depositidFuncionCall = innerTextFunction('deposit');
    const depositTotalTaka = depositidFuncionCall + firstTakaInput;

    valueSetFuntion('deposit', depositTotalTaka);

    const firstBalanceSection = innerTextFunction('balance');
    const TotalFirstBlance = firstBalanceSection + firstTakaInput;
    valueSetFuntion('balance', TotalFirstBlance);


})