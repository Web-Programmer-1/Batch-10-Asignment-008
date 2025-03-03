import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div className=''>

         <div role="tablist" className="tabs tabs-boxed flex flex-col justify-center items-center p-8 ">
         
           <div className='pb-4'>
           <button className='mt-6 w-36 border border-solid border-[#9538E2] rounded-3xl '>
                    <NavLink className={({isActive}) => `is`}>All Products </NavLink> 
             </button> 
           </div>
            {/* {
                categories.map(category =>
                     
                    <NavLink  key={category.category} to={`/category/${category.category}`} role="tab" className={({isActive}) => `tab ${isActive? ' tab tab-active bg-gray-950 font-bold' : ""}` }>{
                        category.category
                    }</NavLink>
                )
            } */}
            
            {
                categories.map(category =>
                     
                    <NavLink  key={category.category} to={`/category/${category.category}`} role="tab" className={({isActive}) => `tab ${isActive? ' tab tab-active bg-gray-950 font-bold' : ""}` }>{
                        category.category
                    }</NavLink>
                )
            }

            
            {/* <a role="tab" className="tab">Tab 1</a>
            <a role="tab" className="tab tab-active">Tab 2</a>
            <a role="tab" className="tab">Tab 3</a> */}

        </div>
        </div>
    );
};

export default Categories;