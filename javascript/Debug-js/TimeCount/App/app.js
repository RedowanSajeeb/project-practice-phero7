function startBtnFun(){
const setTime = document.getElementById('time')
let num = 0;
const intervalId =  setInterval(()=>{
    setTime.innerText = ++num
   },1000);
   

}

