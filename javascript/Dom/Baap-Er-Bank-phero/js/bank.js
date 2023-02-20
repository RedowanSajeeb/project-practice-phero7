document.getElementById('Deposit-Btn').addEventListener('click',function(){
  const userDepositinputNumber = document.getElementById('user-Deposit-inputNumber');
  const depositAmmountUserString = userDepositinputNumber.value;
  const depositAmmountUser = parseFloat(depositAmmountUserString);
  
  if (isNaN(depositAmmountUser)) {
    alert('Not a Number!plz-input a Number');
    return;
  }


    const depositck = document.getElementById('deposit');
    const parseFloatstockdepo = depositck.innerText;
    const agerDepojitValu = parseFloat(parseFloatstockdepo);
// ---------------------------------
    userDepositinputNumber.value = ' ';
      if( depositAmmountUser < 1 ){
        alert('heybro-error Plz return Positive Number');
        return;
      }
  // --------------------------
    const totalDepoAmmount = agerDepojitValu + depositAmmountUser;
  
    depositck.innerText = totalDepoAmmount;
    
    // Balance-section-calculation
    const balanceidCuntionEliment = document.getElementById('balance');
     const takaBalanceString = balanceidCuntionEliment.innerText;
    const takaagerTotal = parseFloat (takaBalanceString);


      const currentBlanceTaka = takaagerTotal + depositAmmountUser;
      balanceidCuntionEliment.innerText = currentBlanceTaka;


 


})