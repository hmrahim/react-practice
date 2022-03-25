import React, { useEffect, useState } from 'react';
import { addDb, getLocalStorageData } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = ({products}) => { 

    const [cart,setCart] = useState([])
    console.log(cart);
    const addToCart = (addedProduct) => {
        addDb(addedProduct.id)

        let newCart = []
        const existCart = cart.find(existProduct => existProduct.id === addedProduct.id)
        if(!existCart){
            addedProduct.quantity = 1
             newCart = [...cart,addedProduct]

        }else{
            const rest = cart.filter(existProduct=> existProduct.id !== addedProduct.id)
            existCart.quantity = existCart.quantity+1
             newCart = [...rest,existCart]
        }
        console.log("new product ",existCart);
        
       
        setCart(newCart)
    }



   useEffect(()=>{
       const storedData = getLocalStorageData()
       
    let saveProduct = []
    for(const id in storedData){
       const addedproduct = products.find(product=> product.id === id)
       if(addedproduct){
        const  quantity = storedData[id]
         addedproduct.quantity = quantity
         saveProduct.push(addedproduct)

       } 
    }
    setCart(saveProduct)
   
   },[products])


   
  
   
    
    return (
        <section>
        <div className='shop'>
            <div className="product-container">
               
                {
                    products.map(data=>  <Product addToDb={addDb} cart={addToCart} data={data} key={data.id}></Product>)
                }
                
            </div>
            <div className="cart-container">
              
             <Cart cart={cart}></Cart>
                
                
            </div>
            
        </div>
        </section>
    );
};

export default Shop;