document.getElementById('calculator-bbtn').addEventListener('click',function(){
   const firstBoxBtnIncome = incomeinputBoxGetid('income-input');

   const foodIncome = incomeinputBoxGetid('food-input');
   const rentIncome = incomeinputBoxGetid('rent-input');
   const clothIncome = incomeinputBoxGetid('cloth-input');

   const calculationFirstBtn = foodIncome + rentIncome + clothIncome;
   const fistCalculation = firstBoxBtnIncome - calculationFirstBtn;
   
   getSetLocationIDCall('display-balance',fistCalculation);
   getSetLocationIDCall('display-expense',calculationFirstBtn);

})
   
document.getElementById('save-btn').addEventListener('click',function(){
    const savinginputget = incomeinputBoxGetid('saving-input');
    const firstBoxBtnIncome = incomeinputBoxGetid('income-input');
    const savings = firstBoxBtnIncome * savinginputget / 100;
    getSetLocationIDCall('display-saving',savings);
    // display-remaining
    const firstBoxBtnIncomee = incomeinputBoxGetid('income-input');
   
   const foodIncome = incomeinputBoxGetid('food-input');
   const rentIncome = incomeinputBoxGetid('rent-input');
   const clothIncome = incomeinputBoxGetid('cloth-input');

   const calculationFirstBtn = foodIncome + rentIncome + clothIncome;
   const fistCalculation = firstBoxBtnIncomee - calculationFirstBtn;
    const remainingBlance = fistCalculation - savings;
    getSetLocationIDCall('display-remaining',remainingBlance);
})