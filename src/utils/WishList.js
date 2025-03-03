// get all data from local storage 

import toast, { ToastBar } from "react-hot-toast";

const wishListAllDataItems = () =>{
    const wishListAllData = localStorage.getItem('wishListItem') ; 
    // const cartItems = JSON.parse(cartAllData) ; 

    if(wishListAllData){
        const wishListItems = JSON.parse(wishListAllData) ; 
        console.log(wishListItems);
        return wishListItems ; 
       
    } else{
        console.log([]);
        return []
    }
    
}


// add to product local storage 

const addToWishList = wishList => {
    // get prevesly saved data local storage 
       
           const wishListItem = wishListAllDataItems() ; 
           const isExist = wishListItem.find(witem => witem.product_id == wishList.product_id)
           if(isExist) return toast.error('all ready exist!');
           
        //    console.log(cartItem);
           wishListItem.push(wishList) ; 
           localStorage.setItem('wishListItem' , JSON.stringify(wishListItem)) ; 
           toast.success("Successfully  added!")
}

// remove product local storage 
const removeWishList = (id) => {
    const wishListItem = wishListAllDataItems() ;
    const removeWItem = wishListItem.filter(wItem => wItem.product_id != id);
    localStorage.setItem('wishListItem' , JSON.stringify(removeWItem)) ; 
    toast.success("Successfully Remove!")

}

// export 

export {addToWishList , wishListAllDataItems , removeWishList}