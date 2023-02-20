document.getElementById('calculator-bbtn').addEventListener('click',function(){
   const firstBoxBtnIncome = incomeinputBoxGetid('income-input');

   const foodIncome = incomeinputBoxGetid('food-input');
   const rentIncome = incomeinputBoxGetid('rent-input');
   const clothIncome = incomeinputBoxGetid('cloth-input');
// ---------------------------
   if(isNaN(firstBoxBtnIncome)){
   alert ('plz-input-Taka');
   return;
   }
//    --------------------
   if(firstBoxBtnIncome < 0){
    alert('plz-positive-$')
    return;
   }
   if(foodIncome < 0){
    alert('plz-positive-$')
    return;
   }
   if(rentIncome < 0){
    alert('plz-positive-$')
    return;
   }
   if(clothIncome < 0){
    alert('plz-positive-$')
    return;
   }
//    ---------------------------
   const calculationFirstBtn = foodIncome + rentIncome + clothIncome;
   const fistCalculation = firstBoxBtnIncome - calculationFirstBtn;

   if(calculationFirstBtn > firstBoxBtnIncome){
    alert('kom kom taka nosto koro')
   }

   getSetLocationIDCall('display-balance',fistCalculation);
   getSetLocationIDCall('display-expense',calculationFirstBtn);

})
   
document.getElementById('save-btn').addEventListener('click',function(){
    const savinginputget = incomeinputBoxGetid('saving-input');
// ---------------------------------
    if(isNaN(savinginputget)){
        alert ('plz-input-Saving%');
        return;
        }
        // ------
         if(savinginputget > 100){
    alert('plz-100%+')
    return;
   }
        // ---------------
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