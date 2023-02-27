const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"],
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"],
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ],
  };
  
  const personDetailFuntion = (persons) => {
    persons.forEach((person) => {
      const child = document.getElementById("div-container");
      const divCriet = document.createElement("div");
      divCriet.classList.add("card", "text-bg-dark", "mb-3", "me-5","w-25");
      divCriet.innerHTML = `
        <div class="card-header">Person:</div>
        <div class="card-body">
          <h5 class="card-title">Person Name: ${person.name.common}</h5>
          <p class="card-text">Age: ${person.age}</p>
          <p class="card-text">Location: ${person.address.street}, House ${person.address.house}</p>
        </div>
      `;
      child.appendChild(divCriet);
    });
  };
  
  personDetailFuntion(person.result);
  