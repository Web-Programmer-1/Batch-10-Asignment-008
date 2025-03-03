import { useEffect } from "react";

 

const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics | Gadget Heaven" ; 
    } , [])
    return (
        <div>
             <div className='bg-[#9538E2] h-64 p-10 text-white text-center mx-auto'>
            <h1 className='text-2xl font-bold'>Statistics</h1>
            <p className='mt-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p> </div>
        </div>
    );
};

export default Statistics;