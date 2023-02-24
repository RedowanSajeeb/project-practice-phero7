function lodbata() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => uBtn(data));
}

function uBtn(users) {
    const uldiv = document.getElementById('user-ul');

  for (const user of users) {
    // console.log(user.name);
    const li = document.createElement('li');
    li.innerText = user.name;
    uldiv.appendChild(li);

  }
}
