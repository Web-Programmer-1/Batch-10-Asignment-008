 
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import MainLayout from '../layouts/MainLayout';
import Home from '../Pages/Home';
import Statistics from '../componets/Statistics';
import Dashboard from '../componets/Dashboard';
import Category from '../componets/Category';
import CardsContainer from '../componets/CardsContainer';
import ProductDetails from '../Pages/ProductDetails';
import WhishList from '../componets/WhishList';
import NotFound from '../componets/NotFound';
import Login from '../componets/Login';
 

const routes = createBrowserRouter([
    {

      path: '/' , 
      element : <MainLayout></MainLayout> , 
      children : [
        {
          path: '/' , 
          element: <Home></Home> , 
          loader: ()=> fetch('../category.json') ,
          children: [
            {path : '/' , 
              element : <CardsContainer></CardsContainer> , 
              loader: () => fetch('../allproducts.json') , 
              // element : <Category></Category>
    
            } ,
            
            {path : '/category/:category' , 
              element : <CardsContainer></CardsContainer> , 
              loader: () => fetch('../allproducts.json') , 
              // element : <Category></Category>
    
            } , 
          ]
        } , 
        {path : '/statistics' , 
          element : <Statistics></Statistics>

        } , 
        {path : '/dashboard' , 
          element : <Dashboard></Dashboard> ,
          // children:[
          //   {
          //     path:'/Whishist' , 
          //     element: <WhishList></WhishList> , 
          //   } , 
          // ] , 

        } , 
        
         {path : '/card/:id' , 
          element : <ProductDetails></ProductDetails> , 
          loader: () => fetch('../allproducts.json') , 

        } , 
         {path : '/signUp' , 
          element : <Login></Login> , 
           

        } , 
        

        {
          path: '*' , 
          element : <NotFound></NotFound>
        }
        
      
      ]
      
    }
  ])
  

export default routes;