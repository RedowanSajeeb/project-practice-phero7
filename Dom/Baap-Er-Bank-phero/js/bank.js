document.getElementById('Deposit-Btn').addEventListener('click',function(){
  const userDepositinputNumber = document.getElementById('user-Deposit-inputNumber');
  const depositAmmountUserString = userDepositinputNumber.value;
  const depositAmmountUser = parseFloat(depositAmmountUserString);
  
    const depositck = document.getElementById('deposit');
    const parseFloatstockdepo = depositck.innerText;
    const agerDepojitValu = parseFloat(parseFloatstockdepo);
  
    const totalDepoAmmount = agerDepojitValu + depositAmmountUser;
  
    depositck.innerText = totalDepoAmmount;
    
    // Balance-section-calculation
    const balanceidCuntionEliment = document.getElementById('balance');
     const takaBalanceString = balanceidCuntionEliment.innerText;
    const takaagerTotal = parseFloat (takaBalanceString);


      const currentBlanceTaka = takaagerTotal + depositAmmountUser;
      balanceidCuntionEliment.innerText = currentBlanceTaka;


  userDepositinputNumber.value = ' ';


})