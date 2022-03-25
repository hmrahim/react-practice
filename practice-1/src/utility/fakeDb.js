
let shoppingCart;
const addTocart = (id)=> {
 

    
   
    const strodCart = localStorage.getItem("shopping-cart")
    if(strodCart){
      shoppingCart = JSON.parse(strodCart)
    }else{
      shoppingCart = {}
    }
   
   
    
    const quantity =  shoppingCart[id]
    if(quantity){
    
      const newItem = quantity + 1
      shoppingCart[id] = newItem
      //localStorage.setItem(id,newItem)
   
    }else{
     shoppingCart[id] = 1
     //localStorage.setItem(id,1)
     
    }
   
   
    localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))
    
   }


   const remove = id => {

       const stored = localStorage.getItem("shopping-cart")
       if(stored){
           const storedCart = JSON.parse(stored);
         //console.log(cart);
         if(id in storedCart){
            // console.log("exist in the cart");\
            console.log(storedCart[id]);
            delete storedCart[id]
            localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart))
            
            
        }

       }
   }

   export {addTocart,remove}