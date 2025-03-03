// get all data from local storage 

import toast, { ToastBar } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const cartAllDataItems = () =>{
    const cartAllData = localStorage.getItem('cartItem') ; 
    // const cartItems = JSON.parse(cartAllData) ; 

    if(cartAllData){
        const cartItems = JSON.parse(cartAllData) ; 
        console.log(cartItems);
        return cartItems ; 
       
    } else{
        console.log([]);
        return []
    }
    
}


// add to product local storage 

const addToCart = product => {
    // get prevesly saved data local storage 
       
           const cartItem = cartAllDataItems() ; 
           const isExist = cartItem.find(item => item.product_id == product.product_id)
           if(isExist) return toast.error('all ready exist!');
           
        //    console.log(cartItem);
           cartItem.push(product) ; 
           localStorage.setItem('cartItem' , JSON.stringify(cartItem)) ; 
           toast.success("Successfully  added!")
}

// remove product local storage 

const removeCartItem = (product_id) => {
    const cartItem = cartAllDataItems() ; 
    const remaining = cartItem.filter(product => product.product_id != product_id )
    localStorage.setItem('cartItem' , JSON.stringify(remaining)) ; 
    toast.success("Successfully Remove!")
}

const clearCart = (navigate) =>{
    localStorage.setItem("cartItem" , JSON.stringify([])) ;
    navigate('/')
}

// export 

export {addToCart , cartAllDataItems , removeCartItem , clearCart}