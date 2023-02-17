function getPinRandom(){
    const randomNumber = Math.round(Math.random()*100000);
    return randomNumber;
}

function getPin(){
    const pin = getPinRandom();
    const pinSting = pin +"";
    if(pinSting.length === 5){
        return pin;
    }
    else{
        return getPin();
    }
}

document.getElementById('generate-pin-id').addEventListener('click',function(){
    const PinResult = getPin();
    const pinShowBox = document.getElementById('pin-box');
    pinShowBox.value =PinResult;
    
})

document.getElementById('numbers-idCalculator').addEventListener('click',function(event){

    const number = event.target.innerText;
    const inputFild = document.getElementById('pin-match-box');
        const inputvalue = inputFild.value;
    if(isNaN(number)){
        if(number === "C"){
            inputFild.value ='';
        }
        else if (number === "<"){ 
            const dgts = inputvalue.split('');
            dgts.pop();
            const redmintDgts = dgts.join('');
            inputFild.value = redmintDgts;
        }

    }
    else{
        const plushNumber = inputvalue + number;
        inputFild.value = plushNumber;
    }
})

document.getElementById('submit-id').addEventListener('click',function(){
    const calculatorPInFinld = document.getElementById('pin-match-box');
    const secFildvalu = calculatorPInFinld.value;
    const pinBOxFild = document.getElementById('pin-box');
    const firstFildvalu = pinBOxFild.value;

    const succfull = document.getElementById('succful-id');
    const worng = document.getElementById('worng');
    
    if(secFildvalu === firstFildvalu){
        succfull.style.display = 'block';
        worng.style.display = "none"
        
    }
    else{
    
        worng.style.display = "block"
        succfull.style.display = 'none';
    }
    pinBOxFild.value = "";
    calculatorPInFinld.value = '';
})