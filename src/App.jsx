import React, {Component} from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/Login';
import Layout  from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Services from './components/Services/Services';
import Categories  from './components/Categories/Categories';
function App() {
  let routing = createBrowserRouter([
    {path:'/', element: <Layout/>,
    children:[
      {index : true,element:<Home/>},
      {path:'/About', element:<About/>},
      {path:'/Contacts', element:<Contacts/>},
      {path:'/Services', element:<Services/>},
      {path:'/Categories', element:<Categories/>},
    ]}

  ]);
  return (
    <>
    <RouterProvider router={routing}/>
    </>
  );
}

export default App;
