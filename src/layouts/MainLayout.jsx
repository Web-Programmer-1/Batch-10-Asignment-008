import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import HeroArea from '../componets/HeroArea';
import { Outlet } from 'react-router-dom';
import  { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div className='w-5/6 mx-auto'>
            <Toaster></Toaster>,
            <div className=' mt-9'>
            <Navbar></Navbar>
         
            </div>
            <div className='min-h-[800px]'>
                
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;