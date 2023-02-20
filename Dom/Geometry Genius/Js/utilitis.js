/*input-value-get-id && calculation*/
function getValueIninput(inputid){
    const firstvaluGetId = document.getElementById(inputid);
    const firstvalugetString = firstvaluGetId.value;
    const pureValue = parseFloat(firstvalugetString);
 return pureValue; 
}
function getInnerText(innerId){
  
    const inneridget = document.getElementById(innerId);
    const nameTextInner = inneridget.innerText;
    return nameTextInner;
}
function setDisplayElements (parentid, finalAreaSetvalu){
    const tagCreate = document.createElement("td");
    tagCreate.style.fontWeight = "700";
    tagCreate.style.margin = "1px 4px 1px 3px";
    tagCreate.innerText = finalAreaSetvalu;
document.getElementById(parentid).appendChild(tagCreate);
}
function innerHtml2symbol(parentid2, finalAreaSetvalu2) {
    const innerHtml2 = document.createElement("td");
    innerHtml2.innerHTML = `
      <ht class = "ml-2">${finalAreaSetvalu2}cm<sup>2</sup></ht>
      <td></td><button id="btn-1st-calculate-triangale" type="button" class="text-white pl-1 pr-1 bg-blue-500 hover:bg-blue-800  font-medium rounded  dark:bg-blue-600">Covert to m<sup>2</sup></button></td>
    `;
    const btnConvert = document.createElement('button');
    btnConvert.innerHTML = `
   
    `
    document.getElementById(parentid2).appendChild(innerHtml2);
    document.getElementById(parentid2).appendChild(btnConvert);
  }
  
  