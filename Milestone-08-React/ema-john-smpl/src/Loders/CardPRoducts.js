import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoder = async () =>{

const lodaderProducts = await fetch("http://localhost:3000/product");
 const products = await lodaderProducts.json()
 console.log(products);

 const stordCard = getShoppingCart()
 const savedCart = [];
//  console.log(stordCard);
  for(const id in stordCard){
    // console.log(id);
    const addedProduct = products.find(pd => pd._id === id)
    // console.log(addedProduct);
    if(addedProduct){
        const qunatity = stordCard[id]
        addedProduct.quantity = qunatity;
        savedCart.push(addedProduct)
    }
  }



 return savedCart;

}





export default cartProductLoder;