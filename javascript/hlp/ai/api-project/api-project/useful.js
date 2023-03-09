const loadData = () => {
  handleLoader(true);
  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => displayUniversData(data.data.tools));
};

const displayUniversData = (data) => {
  const cartContainer = document.getElementById("cart-container");
  //  data = data.slice(0, 6)
  data.forEach((universHub) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100">
              <img src="${universHub.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol>
                 <li> ${universHub.features[0]}</li>
                 <li> ${universHub.features[1]}</li>
                 <li> ${
                   universHub.features[2] ? universHub.features[2] : "Satisfied"
                 }</li>
                </ol>
              </div>
              <div class="card-footer">
               <p>${universHub.name}</p>
               <div class="d-flex justify-content-between">
               <div>
               <i class="fa-regular fa-calendar-days">
               <small class="text-muted">${universHub.published_in}</small>
               </i>
               </div>
                 <div>
                 <button onclick="modalDetails('${
                   universHub.id
                 }')" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-warning text-bg-warning"><i class="fa-solid fa-arrow-right"></i></button>
                 </div>
              </div>
              </div>
        </div>
    `;
    cartContainer.appendChild(div);
    handleLoader(false);
  });
};

const modalDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((data) => modalDataDisplay(data.data));
};

const modalDataDisplay = (data) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
            <div class="modal-content">
              <div class="modal-header position-relative">
                <button type="button" class="btn-close bg-danger rounded-5 position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex justify-content-around align-items-center">
                <div class = 'border border-warning p-3 me-3 w-50'>
                    <p>${
                      data.description
                        ? data.description.slice(0, 50)
                        : "Not Found any description"
                    }</p>
                    <div style = "font-size: 12px" class = "d-flex w-25">
                        <div class = "bg-danger text-white rounded p-2">${
                          data.pricing[0].price
                        } ${data.pricing[0].plan}</div>
                        <div class = "bg-danger text-white rounded  p-2">${
                          data.pricing[1].price
                        } ${data.pricing[1].plan}</div>
                        <div class = "bg-danger text-white rounded  p-2">${
                          data.pricing[2].price
                        } ${data.pricing[2].plan}</div>
                    </div>
                </div>
                <div class = 'border border-primary p-3 ms-3 w-50'>
                    <div>
                     <img style="width: 100%; position:relative" class="" src="${
                       data?.image_link[0]
                     }" alt="" />
                    <h6 style="border-radius: 5px; font-size: 10px; position:absolute; top: 30px; right: 30px" class = "bg-warning d-inline px-2  "><spa>${
                      data.accuracy.score ? data.accuracy.score : "d-none"
                    }% </spa>Accuracy</h6>
                    </div>
                    <div style="heigth: 20px; text:center">
                    <h6>${
                      data.input_output_examples[0].input
                        ? data.input_output_examples[0].input.slice(0, 100)
                        : "Not found any result"
                    }</h6>
                    <p style="font-size: 10px">${
                      data.input_output_examples[0].output
                        ? data.input_output_examples[0].output.slice(0, 100)
                        : "Not found any result"
                    }</p>
                    </div>
                </div>
              </div>
            </div>
  `;
};
// loader
const handleLoader = (isLoading) => {
  const loaderContainer = document.getElementById("loader-content");
  if (isLoading) {
    loaderContainer.classList.remove("d-none");
  } else {
    loaderContainer.classList.add("d-none");
  }
};

loadData();
