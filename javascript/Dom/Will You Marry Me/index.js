document.getElementById("yes-btn").addEventListener("click", function () {
  document.getElementById("msg").innerText = "I LOVE YOU 💘";
});

function proposeSender() {
 const love =  document.getElementById("msg").innerText = "I LOVE YOU 💘Baby ";
 localStorage.setItem("love", love);
 const get = localStorage.getItem('love')
 const p = JSON.parse(get)
 document.getElementById("msg").innerText = p
}
