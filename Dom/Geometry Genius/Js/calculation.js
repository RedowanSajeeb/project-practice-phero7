let sequentialNo = 0;
/*// Triangle-section-event-handle-working-section...*/
document.getElementById('btn-1st-calculate-triangale').addEventListener('click',function(){
    sequentialNo ++;
    const inputValuB = getValueIninput('triangale-b-input');
    const inputValuH = getValueIninput('triangale-h-input');
    // "Error: enter a valid number."--------------
    if(isNaN(inputValuB)){
        alert ("Error: Please enter a valid number.");
        return;
        }
       if(isNaN(inputValuH)){
        alert ("Error: Please enter a valid number.");
        return;
       }
       if(inputValuB < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
       if(inputValuH < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
    //    -------------------------end
    // first-input & second-input-calculation-
            //      Triangle
            //  Area (A) = 0.5 x b x h
    // ---------------------------------------
    const triangleArea1 =  0.5 * inputValuB * inputValuH;
    const triangleArea = triangleArea1.toFixed(2);

    setDisplayElements('set-section-area',sequentialNo);
    const dot = document.createElement('td');
    dot.style.margin = "2px 0px 0px 0px";
    dot.innerText ='.'
    document.getElementById('set-section-area').appendChild(dot);

    const triangleText = getInnerText('triangle-name');
    // website-result-set
    setDisplayElements('set-section-area',triangleText);
    innerHtml2symbol('set-section-area',triangleArea);  
});

/*// Triangle.*/
document.getElementById('btn-2st-calculate-rectangle').addEventListener('click',function(){
    sequentialNo ++;
    const inputValuw = getValueIninput('rectangle-w-input');
    const inputValul = getValueIninput('rectangle-l-input');

    // "Error: enter a valid number."--------------
    if(isNaN(inputValuw)){
        alert ("Error: Please enter a valid number.");
        return;
        }
       if(isNaN(inputValul)){
        alert ("Error: Please enter a valid number.");
        return;
       }
       if(inputValuw < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
       if(inputValul < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
    //    -------------------------end
                /*Rectangle
                Area (A) = w x l*/
    // first-input & second-input-calculation

    const triangleArea12 = inputValuw * inputValul;
    const triangleArea2 = triangleArea12.toFixed(2);

    setDisplayElements('set-section-area',sequentialNo);
    const dot = document.createElement('td');
    dot.style.margin = "2px 0px 0px 0px";
    dot.innerText ='.'
    document.getElementById('set-section-area').appendChild(dot);

    const triangleText = getInnerText('rectangle-name');
    // website-result-set
    setDisplayElements('set-section-area',triangleText);
    innerHtml2symbol('set-section-area',triangleArea2); 
})

/*Parallelogram*/
document.getElementById('btn-3st-calculate-parallelogram').addEventListener('click',function(){
    sequentialNo ++;
    const inputValuw = getValueIninput('parallelogram-b-input');
    const inputValul = getValueIninput('parallelogram-h-input');

    // "Error: enter a valid number."--------------
    if(isNaN(inputValuw)){
        alert ("Error: Please enter a valid number.");
        return;
        }
       if(isNaN(inputValul)){
        alert ("Error: Please enter a valid number.");
        return;
       }
       if(inputValuw < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
       if(inputValul < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
    //    -------------------------end
                /*Parallelogram
                Area (A) = b x h*/
    // first-input & second-input-calculation

    const triangleArea12 = inputValuw * inputValul;
    const triangleArea2 = triangleArea12.toFixed(2);

    setDisplayElements('set-section-area',sequentialNo);
    const dot = document.createElement('td');
    dot.style.margin = "0px 0px 0px 0px";
    dot.innerText ='.'
    document.getElementById('set-section-area').appendChild(dot);

    const triangleText = getInnerText('parallelogram-name');
    // website-result-set
    setDisplayElements('set-section-area',triangleText);
    innerHtml2symbol('set-section-area',triangleArea2); 
})

/*Rhombus*/
document.getElementById('btn-4th-calculate-rhombus').addEventListener('click',function(){
    sequentialNo ++;
    const inputValuw = getValueIninput('rhombus-d1-input');
    const inputValul = getValueIninput('rhombus-d2-input');

    // "Error: enter a valid number."--------------
    if(isNaN(inputValuw)){
        alert ("Error: Please enter a valid number.");
        return;
        }
       if(isNaN(inputValul)){
        alert ("Error: Please enter a valid number.");
        return;
       }
       if(inputValuw < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
       if(inputValul < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
    //    -------------------------end
                /*Rhombus
            Area (A) = 0.5 x d1 x d2*/
    // first-input & 0.5 && second-input-calculation

    const triangleArea12 = 0.5 * inputValuw * inputValul;
    const triangleArea2 = triangleArea12.toFixed(2);

    setDisplayElements('set-section-area',sequentialNo);
    const dot = document.createElement('td');
    dot.style.margin = "2px 0px 0px 0px";
    dot.innerText ='.'
    document.getElementById('set-section-area').appendChild(dot);

    const triangleText = getInnerText('rhombus-name');
    // website-result-set
    setDisplayElements('set-section-area',triangleText);
    innerHtml2symbol('set-section-area',triangleArea2); 
})
/*Pentagon*/
document.getElementById('btn-5th-calculate-pentagon').addEventListener('click',function(){
    sequentialNo ++;
    const inputValuw = getValueIninput('pentagon-p-input');
    const inputValul = getValueIninput('pentagon-b-input');

    // "Error: enter a valid number."--------------
    if(isNaN(inputValuw)){
        alert ("Error: Please enter a valid number.");
        return;
        }
       if(isNaN(inputValul)){
        alert ("Error: Please enter a valid number.");
        return;
       }
       if(inputValuw < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
       if(inputValul < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
    //    -------------------------end
                /*Pentagon
                Area (A) = 0.5 x p x b*/
    // first-input & 0.5 && second-input-calculation

    const triangleArea12 = 0.5 * inputValuw * inputValul;
    const triangleArea2 = triangleArea12.toFixed(2);

    setDisplayElements('set-section-area',sequentialNo);
    const dot = document.createElement('td');
    dot.style.margin = "2px 0px 0px 0px";
    dot.innerText ='.'
    document.getElementById('set-section-area').appendChild(dot);

    const triangleText = getInnerText('pentagon-name');
    // website-result-set
    setDisplayElements('set-section-area',triangleText);
    innerHtml2symbol('set-section-area',triangleArea2); 
})

/*Ellipse*/
document.getElementById('6th-btn-ellipse').addEventListener('click',function(){
    sequentialNo ++;
    const inputValuw = getValueIninput('ellipse-a-input');
    const inputValul = getValueIninput('ellipse-b-input');

    // "Error: enter a valid number."--------------
    if(isNaN(inputValuw)){
        alert ("Error: Please enter a valid number.");
        return;
        }
       if(isNaN(inputValul)){
        alert ("Error: Please enter a valid number.");
        return;
       }
       if(inputValuw < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
       if(inputValul < 0){
        alert("Error: Please enter a valid number.+")
        return;
       }
    //    -------------------------end
                /*Ellipse
                Area (A) = πab*/
    // first-input & π && second-input-calculation

    const triangleArea12 = 3.1416 * inputValuw * inputValul;
    const triangleArea2 = triangleArea12.toFixed(2);

    setDisplayElements('set-section-area',sequentialNo);
    const dot = document.createElement('td');
    dot.style.margin = "2px 0px 0px 0px";
    dot.innerText ='.'
    document.getElementById('set-section-area').appendChild(dot);

    const triangleText = getInnerText('ellipse-name');
    // website-result-set
    setDisplayElements('set-section-area',triangleText);
    innerHtml2symbol('set-section-area',triangleArea2); 
})
