const button11 = () =>{
    // const inputName = document.getElementById('a').value;
    // // console.log(inputName);
    localStorage.removeItem('name')
}


const button12 = () =>{
    const inputName2 = document.getElementById('a').value;
    // console.log(inputName2);
    localStorage.setItem('name',inputName2)
}
// nam

// email/
const button21 = () =>{
    // const inputName2 = document.getElementById('b').value;
    // console.log(inputName2);
    localStorage.removeItem('email')
}

const button22 = () =>{
    const inputName2 = document.getElementById('b').value;
    // console.log(inputName2);
    localStorage.setItem('email',inputName2)
}


// text?

const button31 = () =>{
    const inputName2 = document.getElementById('exampleFormControlTextarea1').value;
    // console.log(inputName2);
    localStorage.removeItem('text')

}

const button32 = () =>{
    const inputName2 = document.getElementById('exampleFormControlTextarea1').value;
    // console.log(inputName2);
    localStorage.setItem('text',inputName2)
}

const button4 = () =>{
    localStorage.clear()
}