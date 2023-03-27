const localStrogaeFunction = (id) => {
  let shopingStore = {};

  //   -stp-1
  const getStore = localStorage.getItem("store-local");
  if (getStore) {
    shopingStore = JSON.parse(getStore);
  } else {
    shopingStore = {};
  }

  // stp-2.1
  const get = shopingStore[id];
  if (get) {
    const updateStorage = +get + 1;
    shopingStore[id] = updateStorage;
    // localStorage.setItem(id, updateStorage);
  } else {
    shopingStore[id] = 1;
    // localStorage.setItem(id, "1");
  }
  localStorage.setItem("store-local", JSON.stringify(shopingStore));

  /*     const get = localStorage.getItem(id)
    if(get){
        const updateStorage = +get+1;
        localStorage.setItem(id, updateStorage);
    }
   else{
    localStorage.setItem(id, "1");
   }
 */
};

export { localStrogaeFunction };
