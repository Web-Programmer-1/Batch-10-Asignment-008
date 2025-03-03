import React from 'react';
import { FaRegTimesCircle } from "react-icons/fa";


const Cart = ({cart , removeCart}) => {
    const {price , product_title , product_image , description , product_id } = cart ; 
    return (
        <div className=' mt-5'>
            
           <div className='w-[1000px] h-44 p-9 shadow-lg rounded-3xl flex  relative  '>
           <div>
                <img className='w-40 h-28' src={product_image} alt="" />
            </div>
            <div className='ml-10'>
                  <div>
                  <h2 className='font-bold text-xl'>{product_title}</h2>
                  </div>
                  <h4 className='py-2 font-semibold'>{description}</h4>
                  <h4 className=' font-bold'>Price ${price}</h4>
            </div>
            <div className='absolute top-6 right-8'>
               <button onClick={() => removeCart(product_id)}> <FaRegTimesCircle className='text-red-400' size={26} />
               </button>
            </div>
           </div>
          
        </div>
    );
};

export default Cart;