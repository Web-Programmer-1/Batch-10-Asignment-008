import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import cart from '../assets/cart2.svg'
import heart from '../assets/heart2.svg'
import { FaRegTimesCircle } from 'react-icons/fa';


const Navbar = () => {

   const {pathname} = useLocation();
   console.log(pathname);

   const handelCart = () => {
    document.getElementById('modal').classList.remove("hidden") ; 
    // document.getElementById('close').classList.add("z-0") ; 

  }

  const closeModal = () =>{
    document.getElementById('modal').classList.add("hidden") ; 
  }

    return (
   
      
        <div className={`navbar ${pathname === '/' ? "text-white bg-[#9538E2] rounded-t-3xl" : "bg-white"} relative`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               <li><Link to='/'>Home</Link></li>
            <li><Link to={'/statistics'}>Statistics</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>   
            </ul>
          </div>
          <a className="text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>    
            <li><NavLink to={'/signUp'}>Sign Up</NavLink></li>  
          </ul>
        </div>
        <div className="navbar-end mr-6 space-x-4">
          {/* <a className="btn">Button</a> */}
           <button onClick={() => handelCart()} className=''> <Link><img src={cart} alt="" /></Link></button>
           <Link to={'/dashboard'}><img src={heart} alt="" /></Link>
        </div>
        {/* modal */}
       {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div id='modal' className=' hidden p-6 absolute rounded-3xl bg-white top-16 h-40 right-20 z-10'>
             <div className='relative'>
              <div>
                  <h2 className='text-black font-bold pb-2'>0 Items</h2>
              </div>

             <div>
             <button className='bg-[#9538E2] py-2 px-4 rounded-3xl'><Link to={'/dashboard'}>View Cart </Link></button>
             </div>
              <div onClick={() => closeModal()} id='close' className='absolute -top-8 right-2 text-black'>
              <FaRegTimesCircle className='text-red-400' size={26} />
              </div>
             </div>
           

          </div>
      </div>
    );
};

export default Navbar;