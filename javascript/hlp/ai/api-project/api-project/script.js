const loadUI = () => {
  handleLoader(true);

  fetch("https://openapi.programming-hero.com/api/ai/tools")
    .then((res) => res.json())
    .then((data) => {
      displayCards(data.data.tools);
    });
};

// define cards rendering function
const displayCards = (data, showAll = false, sortByDate = false) => {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  let sortedData = [...data];
  if (sortByDate) {
    sortedData.sort((a, b) => {
      return new Date(a.published_in) - new Date(b.published_in);
    });
  }

  const sliceIndex = showAll ? sortedData.length : 6;
  sortedData.slice(0, sliceIndex).forEach((card) => {
    const div = document.createElement("div");
    div.classList.add("col-sm-12");
    div.classList.add("col-md-6");
    div.classList.add("col-lg-4");

    div.innerHTML = `
        <div class="card w-100 mb-3" >
            <img src=${
              card?.image
            } class="card-img-top img-fluid h-25" alt="card-image">

            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <ol>
                    <li> ${card.features[0]}</li>
                    <li> ${card.features[1]}</li>
                    <li> ${
                      card.features[2] ? card.features[2] : "Feature is coming!"
                    }</li>
                </ol>
            </div>

            <div class="card-footer">
                <p class="font-bold">${card.name}</p>
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="glyphicon glyphicon-asterisk"></span>
                        <small class="text-muted">${card.published_in}</small>  
                    </div>
                    <div>
                        <button onclick="modalCard('${
                          card.id
                        }')" type="button" data-bs-toggle="modal" data-bs-target="#modalContainer" class="btn btn-outline-warning text-bg-warning">Details</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    cardsContainer.appendChild(div);
  });

  handleLoader(false);

  const showMoreButton = document.getElementById("showMore");
  if (data.length > 6) {
    showMoreButton.style.display = "block";
    showMoreButton.innerHTML = showAll ? "Show Less" : "Show More";
    showMoreButton.addEventListener("click", () => {
      displayCards(data, !showAll);
      showMoreButton.blur();
    });
  } else {
    showMoreButton.style.display = "none";
  }

  const sortByDateButton = document.getElementById("sortByDate");
  sortByDateButton.addEventListener("click", () => {
    displayCards(data, false, !sortByDate);
    sortByDateButton.blur();
  });
};

const modalCard = (id) => {
  fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then((res) => res.json())
    .then((data) => modalCardDisplay(data.data));
};

const modalCardDisplay = (data) => {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `<div class="modal-dialog modal-lg modal-dialog-centered">
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
         <img style="width: 100%; position:relative" class="image-fluid" src="${
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
  </div>`;

  modalContainer.appendChild(div);
};

// loader handling
const handleLoader = (isLoading) => {
  const loaderComponent = document.getElementById("loader");
  if (isLoading) {
    loaderComponent.classList.remove("d-none");
  } else {
    loaderComponent.classList.add("d-none");
  }
};

loadUI();

{
  /* <div class="modal-dialog modal-lg modal-dialog-centered">
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
                 <img style="width: 100%; position:relative" class="image-fluid" src="${
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
          </div> */
}
