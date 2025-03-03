import React, { useEffect } from 'react';
import HeroArea from '../componets/HeroArea';

import Categories from '../componets/categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        document.title = "Home | Gadget Heaven" ; 
    } , [])
    const categories = useLoaderData()
    return (
        <div>
              <HeroArea></HeroArea>
              <div className=' mt-[500px]  pb-60'>
                 <h2 className='text-center text-2xl font-bold'>Explore Cutting-Edge Gadgets</h2>
                  <div className='flex  mt-10'>
                  <Categories categories={categories}></Categories>
                  <Outlet></Outlet>
                  {/* <CardsConta></CardsConta> */}
                  </div>
              </div>
        </div>
    );
};

export default Home;