import React, { useEffect, useState } from 'react';
 
import { addToCart, cartAllDataItems, clearCart, removeCartItem } from '../utils';
import Card from './Card';
import Cart from './Cart';
import sortIcon from '../assets/sortIcon.svg'
import WhishList from './WhishList';
import { removeWishList, wishListAllDataItems } from '../utils/WishList';
import payment from '../assets/Group.png'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven" ; 
} , [])
    // const playerRemove = (id) =>{
    //     const playerRemaining = chosePlayer.filter((p) => p.id != id ) ;
    //     setPlayer(playerRemaining)
    //     toast.warning("Player Remove")
    //     console.log(id);
    // }
  // Btn Active 
  const [btnActive , setBtnActive ] = useState({
    value : true , 
    status : "active"
  })
 
  const handleIsActiveBtn = (status) =>{
       if(status == "cart"){
        setBtnActive({
           value: true , 
           status:"cart"
        })
       }
       else{
        setBtnActive({
           value : false , 
           status : "wishlist"
        })
       }
  }
 
 
 
    const [product ,setProduct] = useState([]) ; 
    useEffect(() => {
        const addToCarts = cartAllDataItems(); 
        setProduct(addToCarts) ;
    } , []) 
 
      console.log(product);

      // Total Cost 
      // const [price , setPrice ] = useState(0) ; 
      const totalPrice = product.reduce((sum , totalP ) => sum + totalP.price , 0 ) ;
      
      const totalNewPrice = totalPrice.toFixed(2)

    // WishList 
    const [wishList , setWishList ] = useState([]) ; 
    useEffect(() => {
        const addToWishList = wishListAllDataItems();
        setWishList(addToWishList)
        
    } , [])

    const removeWishListItem = (product_id)=>{
         removeWishList(product_id)
         const addToWishList = wishListAllDataItems();
         setWishList(addToWishList)
    }

    // Remove Cart Item 

    const removeCart = (product_id) => {
        removeCartItem(product_id) ;
        const addToCarts = cartAllDataItems(); 
        setProduct(addToCarts) ;

    }

   const handelSort = () =>{
    
    const sorted = [...product].sort((a , b ) => b.price - a.price)
    // product.price.sort((a , b ) => b.price - a.price ) ; 
    setProduct(sorted)
   
   }

  //  Purchase 
   
  const purchase = () => {
    document.getElementById('my_modal_4').showModal() ; 
   
  }

   const home = useNavigate()
  const localStrRe = () => {
   
    clearCart(home)
    
    home('/')

  }
 
    return (
       <div>
  
        
          <div className='bg-[#9538E2] h-64 text-white text-center mx-auto'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
            <p className='mt-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <div className='flex justify-center items-center space-x-5 ml-7 mt-8'>
                <button onClick={() => handleIsActiveBtn("cart")} className={`${btnActive.value? 'bg-white py-2 px-9 rounded-3xl flex text-[#9538E2] font-bold' : " border border-solid border-white bg-transparent py-2 px-9 rounded-3xl flex text-white font-bold"}`} >Cart</button>

                <button onClick={() => handleIsActiveBtn("wishlist") } 
             className={`${btnActive.value? 'border border-solid py-2 px-4 rounded-3xl border-white text-white font-bold': 'bg-white py-2 px-4 rounded-3xl flex text-[#9538E2] font-bold'}`}
         
           >Wish List </button>
            </div>
        </div>

         <div className='w-5/6 mx-auto'>

      

         {
            btnActive.value?  <div className=' flex justify-between mt-8'>
            <h2 className='font-bold text-xl'> Cart </h2>
            <div className='flex justify-center items-center space-x-7'>
                <p className='font-semibold text-xl'>Total cost: {totalNewPrice} </p>
 
                <button onClick={()=> handelSort()} className='border border-solid border-[#9538E2] px-5 py-2 rounded-3xl font-bold text-[#9538E2] flex'> Sort by Price <img className='ml-2' src={sortIcon} alt="" /></button>
                <button onClick={() => purchase()} className='bg-[#9538E2] py-2 px-5 font-bold text-white rounded-3xl'>Purchase</button>
            </div>
          </div>
             : <div className='mt-8'>
                  <h2 className='font-bold text-xl'>WishList</h2>
             </div>


         }

         

        
 
        <div className='grid grid-cols mx-auto mt-8  '>
          {
               btnActive.value ?  product.map(cart => <Cart removeCart={removeCart} cart={cart} key={cart.id}></Cart>) :  wishList.map(wishlist => <WhishList removeWishListItem={removeWishListItem} wishlist={wishlist}  key={wishlist.id}></WhishList>)
            }
          </div> 
         </div>

               {/* Modal */}

               {/* You can open the modal using document.getElementById('ID').showModal() method */}
          
            <dialog id="my_modal_4" className="modal ">
              <div className="modal-box w-96 max-w-5xl   text-center  ">
                <img className='mx-auto py-3' src={payment} alt="" />
                <h3 className="font-bold text-lg">Payment Successfully</h3>
                <p className="py-4">Thanks for purchasing.</p>
                <p className="">  Total: ${totalNewPrice}</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                  
                        <button onClick={localStrRe} className="btn w-72 mr-8">Close</button>
                 
                  </form>
                </div>
              </div>
            </dialog>
                      

       </div>
    );
};

export default Dashboard;