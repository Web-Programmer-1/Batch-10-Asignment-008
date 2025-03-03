import React, { useEffect, useState } from 'react';
import Categories from './categories';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CardsContainer = () => {
    const data = useLoaderData() ; 
   
     
    const {category} = useParams() ; 
    const [ product , setProduct ] = useState([])
    useEffect(() =>{
       if(category){
        const filterByCategory = [...data].filter(p => p.category === category)
        setProduct(filterByCategory)  
       } 
       else{
        setProduct(data)
       }
    } ,[category , data])
   
    return (
        <div className=''>
              {/* <h2 className='text-center text-2xl font-bold'>Category Length {data.length}</h2> */}
          <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 ml-16 gap-5'>
          {
                product.map(card => <Card card={card} key={card.id}></Card>)
            }
          </div>
              
        </div>
    );
};

export default CardsContainer;