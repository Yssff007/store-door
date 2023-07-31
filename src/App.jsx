import React, {Component} from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login';
import Layout  from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import BedRoom from './components/BedRoom/BedRoom';
import Services from './components/Services/Services';
import Categories  from './components/Categories/Categories';
import Register from './components/Register/Register'
import Cart from './components/Cart/Cart'
import LivinRoom from './components/LivingRoom/LivingRoom'
import Kitchen from './components/Kitchen/Kitchen'
import DinningRoom from './components/DinningRoom/DinningRoom'
function App() {
  let routing = createBrowserRouter([
    {path:'/', element: <Layout/>,
    children:[
      {index : true,element:<Home/>},
      {path:'/About', element:<About/>},
      {path:'/Services', element:<Services/>},
      {path:'/Categories', element:<Categories/>,children:[
        {path:'BedRoom', element:<BedRoom/>},
        {path:'LivingRoom', element:<LivinRoom/>},
        {path:'Kitchen', element:<Kitchen/>},
        {path:'DinningRoom', element:<DinningRoom/>},
        
      ]},
      {path:'/Login', element:<Login/>},
      {path:'/Register', element:<Register/>},
      {path:'/Cart', element:<Cart/>},
    ]}

  ]);
  return (
    <>
    <RouterProvider router={routing}/>
    </>
  );
}

export default App;
