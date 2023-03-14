const countField = document.getElementById('counstSset');
let count = 0;
const tipmaro = () => {
    count += 1;
    countField.innerText = count;
    localStorage.setItem('count', count);
  }
  

// retrieve the count value from localStorage and set it to the count variable
const localStorageCount = localStorage.getItem('count');

if (localStorageCount) {
  count = parseInt(localStorageCount);
}

// set the initial value of countField to the current count value
countField.innerText = count;

