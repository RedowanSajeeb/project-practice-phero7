const timeBillionaires = async () =>{
    const url = `https://forbes400.onrender.com/api/forbes400?limit=10`
    try{
        const res = await fetch (url);
        const data = await res.json();
        billionairesManCall(data);
    }
    catch(error){

    }
}

const billionairesManCall = mans =>{

    mans.forEach(man => {
        const cardIDget = document.getElementById('card-box-section');
        const setCart = document.createElement('div');
        setCart.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${man.person.squareImage}" class="img-fluid rounded-start" alt="...">
                        <h5 class="card-title text-center mt-3 ms-1">${man.person.name}</h5>
                      </div>
                      <div class="col-md-8 border-start">
                        <div class="card-body">
                         
                          <h5 class="card-title">State: ${man.state}</h5>
                          <h5 class="card-title">City: ${man.city}</h5>
                          <h5 class="card-title">Total Shares: ${man.financialAssets[0].numberOfShares}</h5>
                          <h5 class="card-title">Share price ${man.financialAssets[0].sharePrice}</h5>
                       
                          <h6 class="card-text">source: <small class="text-muted">${man.source}</small></h6>
                        </div>
                      </div>
                    </div>
                  </div>
        `

        cardIDget.appendChild(setCart);
    });
}

timeBillionaires();