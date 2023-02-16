const textarea = document.getElementById("textarea1");
function f1(e){
    document.getElementById("font-size").defaultValue = "26";
  let value = e.value;
   textarea.style.fontSize = value + "px";
}
function f2(e){
    if (textarea.style.fontWeight == "bold") {
        textarea.style.fontWeight = "normal";
        e.classList.remove();
    }
    else {
        textarea.style.fontWeight = "bold";
        e.classList.add();
    }
}
function f3(e){
    if(textarea.style.fontStyle == 'italic'){
        textarea.style.fontStyle = "normal";
        // e.classList.remove()
    }
    else{
        textarea.style.fontStyle = "italic"
        // e.classList.add();
    }
}
function f4(e){
    if(textarea.style.textDecoration === "underline"){
        textarea.style.textDecoration = "none";
        e.classList.remove("active");
    }
    else{
        textarea.style.textDecoration = "underline";
        e.classList.add("active");
    }
}
function f5(e){
   if(textarea.style.textAlign == "left"){
    textarea.style.textAlign = "left"
   } 
   else {
    textarea.style.textAlign = "left"
   }
}
function f6(e){
   if(textarea.style.textAlign == "left"){
    textarea.style.textAlign = "center"
   } 
   else {
    textarea.style.textAlign = "center"
   }
}
function f7(e){
   if(textarea.style.textAlign == "left"){
    textarea.style.textAlign = "right"
   } 
   else {
    textarea.style.textAlign = "right"
   }
}
function f8(e) {
    if (textarea.style.textTransform == "uppercase") {
        textarea.style.textTransform = "none";
        e.classList.remove("active");
    }
    else {
        textarea.style.textTransform = "uppercase";
        e.classList.add("active");
    }
}
function f9() {
    textarea.style.fontWeight = "normal";
    textarea.style.textAlign = "left";
    textarea.style.fontStyle = "normal";
    textarea.style.textTransform = "capitalize";
    textarea.value = "";
}
function f10(e){
    let value = e.value;
    textarea.style.color = value;
}