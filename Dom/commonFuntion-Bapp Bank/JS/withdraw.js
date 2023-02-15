document.getElementById('withdraw-Btn').addEventListener('click',function(){

    const withdrawINput = inputValueUserBox('user-Withdraw-inputNumber');
    if (isNaN(withdrawINput)) {
        return;
      }
    const withdraStock = innerTextFunction('withdraw');
    const withdrawTaka = withdraStock + withdrawINput;

    valueSetFuntion('withdraw',withdrawTaka);

    const balanceTaka = innerTextFunction('balance');
    const totalTaka = balanceTaka - withdrawINput;
    valueSetFuntion('balance', totalTaka); 

})