const button = () =>{
    
const valu1 = document.getElementById("valu1").value
document.getElementById("valu1").value = " "

const valu2 = document.getElementById("valu2").value
document.getElementById("valu2").value = " "

// console.log(valu2,valu1);
showDesplay(valu1,valu2)
sevProduchToLocalStorage(valu1,valu2)
}
const showDesplay =(x,y) =>{
//  console.log(x,y);
  const ul2 =  document.getElementById('ulcontsin')
  const make = document.createElement('li')
  make.innerText = `${x} : ${y}`
  ul2.appendChild(make)
  
}
// ------------------------------

const getStorteShopingCart = () =>{
    let cart = {}
    const storatCard = localStorage.getItem('cart')
    if(storatCard){
        cart = JSON.parse(storatCard)
    }
    return cart;
}
const sevProduchToLocalStorage = (produch , quntaty) =>{
    const cart = getStorteShopingCart();
    cart[produch] = quntaty;
    // console.log(cart);
    const cartStingiFiy = JSON.stringify(cart);
    localStorage.setItem('cart',cartStingiFiy)

}
const showDeslpaLocalStorag = () =>{
    const savdCart = getStorteShopingCart();
    for (const p in savdCart){
        const qun = savdCart[p]
        showDesplay(p,qun)
    }
    
}
showDeslpaLocalStorag();