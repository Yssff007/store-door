import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login';
import Layout  from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Categories  from './components/Categories/Categories';
import Register from './components/Register/Register'
import Cart from './components/Cart/Cart'
function App() {
  let routing = createBrowserRouter([
    {path:'/', element: <Layout/>,
    children:[
      {index : true,element:<Home/>},
      {path:'/About', element:<About/>},
      {path:'/Services', element:<Services/>},
      {path:'/Categories', element:<Categories/>},
      {path:'/Register', element:<Register/>},
      {path:'/Login', element:<Login/>},
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
