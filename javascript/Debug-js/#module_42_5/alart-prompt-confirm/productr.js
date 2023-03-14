const button = () =>{
    
const valu1 = document.getElementById("valu1").value
document.getElementById("valu1").value = " "

const valu2 = document.getElementById("valu2").value
document.getElementById("valu2").value = " "

// console.log(valu2,valu1);
showDesplay(valu1,valu2)

}
const showDesplay =(x,y) =>{
//  console.log(x,y);
  const ul2 =  document.getElementById('ulcontsin')
  const make = document.createElement('li')
  make.innerText = `${x} : ${y}`
  ul2.appendChild(make)

}