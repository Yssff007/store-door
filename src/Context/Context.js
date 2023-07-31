import React, { createContext, useContext, useReducer } from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { cartReducer,filterReducer } from './Reducers';
const Cart = createContext();
export default function Context({children}) {
  const [items,setItems] = useState([]);
  const [categories,setCategories] = useState([]);
  async function getItems(){
    let {data} = await Axios.get(`http://localhost:9999/api/items`);

    setItems(data)
  }
  async function getCategories(){
    let {data} = await Axios.get(`http://localhost:9999/api/categories`);
    
    setCategories(data)
  }
    
 
  useEffect(()=>{ 
    getItems()
    getCategories()
  },[]);
  
  const [state,dispatch]=useReducer(cartReducer, {
    cart:[],
  })
  
  return (
    <>
      <Cart.Provider value={{state,dispatch,items,setItems,categories,setCategories}}>
        {children}
      </Cart.Provider>
    </>
  )
}
export const CartState=()=>{
  return useContext(Cart)
}
