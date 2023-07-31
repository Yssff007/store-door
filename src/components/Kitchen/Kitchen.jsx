import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link}  from "react-router-dom";
import { CartState } from '../../Context/Context';
export default function Kitchen() {
  const [items,setItems] = useState([]);
  async function getItems(){
    let {data} = await Axios.get(`http://localhost:9999/api/items`);
    const filteredData = data.filter((item)=> item.category_id === 3)
    setItems(filteredData)
  }
  useEffect(()=>{ 
    getItems()
  },[]);
  const {state:{cart},
  dispatch
 }= CartState();
  return (
    <>
      {items.map((item, id)=> <div key={id} className='col-md-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={'holder.js/100px180'} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description.split(' ').splice(0,10).join(' ')}
                </Card.Text>
                {
                  cart.some(p=>p.id===item.id)?(<Button onClick={()=>{
                    dispatch({
                      type:"REMOVE-FROM-CART",
                      payload: item,
                    })
                  }} variant="danger">Remove from Cart</Button>
                  ):(<Button onClick={()=>{
                    dispatch({
                      type:"ADD-TO-CART",
                      payload: item,
                    })
                  }} variant="primary">Add to Cart</Button>)
                }
              </Card.Body>
            </Card>
          </div>)}
    </>
  )
}
