const addDb = (id) => {
  let shopingCart = {};

  const stord = localStorage.getItem("shoping-cart");
  if (stord) {
    shopingCart = JSON.parse(stord);
  }

  const quantity = shopingCart[id];
  if (quantity) {
    const newQuantity = shopingCart[id] + 1;
    shopingCart[id] = newQuantity;
  } else {
    shopingCart[id] = 1;
  }

  localStorage.setItem("shoping-cart", JSON.stringify(shopingCart));

  // const stord = localStorage.getItem(id)
  // if(stord){
  //     const newQuantity = parseInt(stord) + 1
  //     localStorage.setItem(id,newQuantity)
  // }else{
  //     localStorage.setItem(id,"1")
  // }
};

const getLocalStorageData = () => {
    let getData = {}
    const cart = localStorage.getItem("shoping-cart")
    if(cart){
       getData = JSON.parse(cart)
    }
    return getData
};


export { addDb ,getLocalStorageData};
