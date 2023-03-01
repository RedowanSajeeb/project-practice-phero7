const timeBillionaires = async (limit) => {
  const url = `https://forbes400.onrender.com/api/forbes400?${limit}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    billionairesManCall(data);
  } catch (error) {}
};
const billionairesManCall = (mans) => {
  mans.forEach((man) => {
    const cardIDget = document.getElementById("card-box-section");
    const setCart = document.createElement("div");
    setCart.innerHTML = `
        <div class="card mb-3 h-100 text-white" style="max-width: 540px; background-color: #0E1B34;">
                    <div class="row g-0">
                      <div class="col-md-4 ">
                        <img src="${man.person.squareImage}" class="img-fluid rounded-start" alt="...">
                        <h5 class="card-title text-center mt-3 ms-1">${man.person.name}</h5>
                      </div>
                      <div class="col-md-8 border-start">
                        <div class="card-body">
                         
                          <h5 class="card-title">State: ${man.state? man.state : "No State"}</h5>
                          <h5 class="card-title">City: ${man.city}</h5>
                          <h5 class="card-title">Total Shares: ${man.financialAssets[0].numberOfShares}</h5>
                          <h5 class="card-title">Share price ${man.financialAssets[0].sharePrice}</h5>
                       
                          <h6 class="card-text">source: <small class="">${man.source}</small></h6>

                          <button onclick= "lodModalDetails()" type="button" class="btn btn-primary mt-2" style="background-color: #0E1B34;" data-bs-toggle="modal" data-bs-target="#hardWorkCillmodelid">General Information<button>
                    </div>
                      </div>
                    </div>
                  </div>
        `;
    cardIDget.appendChild(setCart);
    
  });

};

// loadMoreBtn
const cardIDget = document.getElementById("card-box-section");
cardIDget.innerHTML = "";
document.getElementById("loadMoreBtn").addEventListener("click", function () {
  timeBillionaires("limit=400");
});
// myFunctionmodal()


timeBillionaires("limit=10");
