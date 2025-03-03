import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import commingSoon from '../assets/comingsoon.jpg'

const Card = ({card}) => {
  
    const {price , product_title , product_image  , product_id } = card ; 
    const {pathname} = useLocation() ; 
    // console.log(iPhone);
    return (
         <section className='relative'>
           
        {
                pathname == '/category/Iphone' ? <div className='ml-48 w-full'>
                <img src={commingSoon} alt="" />
                </div> :   
                
                <div className="card bg-base-100 h-96   shadow-xl  ">
                <figure>
                    <img className='h-56'
                    src={product_image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price : ${price}</p>
                    <div className="card-actions  ">
                    <Link to={`/card/${product_id}`}>
                    <button className=" border border-solid border-[#9538E2] py-2 px-3 rounded-3xl text-[#9538E2] font-bold">View Details </button>
                    </Link>
                    </div>
                </div>
                
                <div>
               
                </div>
    
              
            </div>
    

              
            
             }

         </section>
    );
};

export default Card;