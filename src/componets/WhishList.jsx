import React, { useState } from 'react';
import { addToCart } from '../utils';
import { FaRegTimesCircle } from 'react-icons/fa';


const WhishList = ({wishlist , removeWishListItem }) => {
    const {price , product_title , product_image , description , product_id } = wishlist ; 

    const [addProduct , setProduct ] = useState([])

    const handleCart = (wishlist) => {
       const display =  addToCart(wishlist) ;
       setProduct(display)
    }
    return (
        <div className=' mt-5'>
            <h2 className='font-bold text-2xl'></h2>
            
        <div className='w-[1000px] h-48 p-9 shadow-lg rounded-3xl flex   relative '>
        <div>
             <img className='w-40 h-28' src={product_image} alt="" />
         </div>
         <div className='ml-10'>
               <h2 className='font-bold text-xl'>{product_title}</h2>
               <h4 className='py-2 font-semibold'>{description}</h4>
               <h4 className=' font-bold'>Price ${price}</h4> 

               <button onClick={() => handleCart(wishlist)} className='py-2 px-4 bg-[#9538E2] font-semibold text-white rounded-3xl mt-2'>Add To Card</button>
         </div>
         <div className='absolute top-5 right-7'>
               <button onClick={() => removeWishListItem(product_id)} className=''> <FaRegTimesCircle className='text-red-400 t' size={26} />
               </button>
         </div>
        </div>
     </div>
    );
};

export default WhishList;