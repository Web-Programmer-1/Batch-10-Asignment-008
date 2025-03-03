import React from 'react';
import Navbar from './Navbar'; 
import banner from '../assets/banner.jpg'

const HeroArea = () => {
    return (
        <div className='bg-[#9538E2]   rounded-b-3xl   p-5 text-center pb-48 relative'>
               
               {/* Hero Area Start  */}
               <div className='mt-4'> 
                     <h1 className='font-bold text-4xl text-white '>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                     <p className='text-gray-200 mt-4'>Explore the latest gadgets that will take your experience to the <br /> next level. From smart devices to the coolest accessories, we have it all!</p> 
                     <button className='bg-white text-[#9538E2] py-2 md:px-5 rounded-3xl mt-6 font-bold'>Shop Now </button>
               </div>
               <div className='absolute md:top-80 md:left-80 border border-solid border-gray-200 p-4 rounded-3xl'>
                   <img className='  md:w-[650px] md:h-[450px] rounded-3xl' src={banner} alt="" />
               </div>
        </div>
    );
};

export default HeroArea;