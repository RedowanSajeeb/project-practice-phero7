let intervalId;
let num = 0;
const setTime = document.getElementById("time");
function startBtnFun() {
  intervalId = setInterval(() => {
    setTime.innerText = ++num;
  }, 1000);
}
function stopBtnfun() {
  clearInterval(intervalId);
}
function resetBtnfun() {
  clearInterval(intervalId);
  setTime.innerText = 00;
  num = 0
}
