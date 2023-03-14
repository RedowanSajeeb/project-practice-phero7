// const button11 = () =>{
//     // const inputName = document.getElementById('a').value;
//     // // console.log(inputName);
//     localStorage.removeItem('name')
// }


// const button12 = () =>{
    
//     // console.log(inputName2);
//     localStorage.setItem('name',inputName2)
// }
// // nam

// // email/
// const button21 = () =>{
//     // const inputName2 = document.getElementById('b').value;
//     // console.log(inputName2);
//     localStorage.removeItem('email')
// }
// const inputName2 = document.getElementById('b').value;
// const button22 = () =>{
    
//     // console.log(inputName2);
//     localStorage.setItem('email',inputName2)
// }


// // text?

// const button31 = () =>{
//     const inputName2 = document.getElementById('exampleFormControlTextarea1').value;
//     // console.log(inputName2);
//     localStorage.removeItem('text')

// }
// const inputName2v = document.getElementById('exampleFormControlTextarea1').value;
// const button32 = () =>{
    
//     // console.log(inputName2);
//     localStorage.setItem('text',inputName2)
// }

// const button5 = () =>{
//     localStorage.clear()
// }
// ---------------------------------------------------start
const button4 = () =>{
    const inputName2c = document.getElementById('exampleFormControlTextarea1').value;
    const inputName2b = document.getElementById('b').value;
    const inputName2 = document.getElementById('a').value;
    const zog = {name: inputName2, email: inputName2b, text: inputName2c}
    const cogg = JSON.stringify(zog)
    localStorage.setItem("objj",cogg)
}