import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import cart from '../assets/cart.svg'
import heart from '../assets/heart.svg'
import { addToCart,  cartAllDataItems } from "../utils";
import { addToWishList } from "../utils/WishList";
 

const ProductDetails = () => {
  const {id} = useParams() ; 
  const data = useLoaderData() ;

// productDetails

  const product = data.find( product => product.product_id == id) ; 
  const wishList = data.find( product => product.product_id == id) ; 


//   useEffect(() => {
  
//     setProduct(singleProduct)
//   } , [data , id ])

 
 
   
   
//   const {product_title , product_image , description,  price , availability  }= product ;
 

  // const [cart , setCart] = useState([]) ; 
  // const [price , setPrice ] = useState(0) ; 
  // useEffect(() => {
  //     const totalPrice =  product.price + price ;
  //     setPrice(totalPrice)
     
       
  // } , [pro]) 
    const handleCart = (product) => {
      
      addToCart(product) ;

      // cartAllDataItems()
  }

  const handleWishList = (wishList) => {
    addToWishList(wishList)
  }
    return (

      

        <div className="bg-[#9538E2] h-96 relative mx-auto flex justify-center items-center ">
            <div className="z-10 -mt-60 text-white text-center space-y-4">
                <h2 className="text-4xl font-bold text-r">Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
  <div className="hero bg-white absolute top-40 w-5/6 h-[500px] shadow-md rounded-3xl  ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={product.product_image}
      className="max-w-md h-72 rounded-lg shadow-2xl" />
    <div className="ml-6">
      <h1 className="text-2xl font-bold">{product.product_title}</h1>
      <h2 className="font-semibold py-4 ">Price: ${product.price}</h2>
      <a className="font-semibold border border-solid border-[#309C08] text-[#309C08] py-1 px-2 mt-5 rounded-full ">{`${product.availability? 'In Stock ' : "Un Stock"}`}</a>
      <p className="py-5 font-medium">
        {product.description}
      </p>
 
      {
        product.specification.map((spec , index ) => 
          <li className="list-decimal" key={index}>{spec}</li>
        )
      }
       <h3 className="mt-2 font-bold text-xl">Rating</h3>   
      <div className="rating mt-4">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
          defaultChecked />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <div className=" ml-3 font-bold">{product.rating}</div>
      </div>

       
       <div className="flex space-x-10">
 
           <button onClick={() => handleCart(product)} className="btn btn-primary mt-4">Add To Cart <img src={cart} alt="" /></button>  
     
          <button onClick={() => handleWishList(product)}>
                 <img className="mt-4" src={heart} alt="" />
          </button>
       </div>
   
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;