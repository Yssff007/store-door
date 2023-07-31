import React, { useEffect, useState } from 'react'
import { CartState } from '../../Context/Context'
import { Button, Form, ListGroup } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Cart.css'
import {AiFillDelete} from 'react-icons/ai'
export default function Cart() {
  const{state:{cart},
    dispatch,items,setItems
} = CartState();
const [totalPrice, setTotalPrice] = useState();
useEffect(()=> {
  setTotalPrice(cart.reduce((acc,curr)=> acc + Number(curr.price)*curr.qty , 0))
}, [cart])
  return (
    <>
    <div className='Home'>
      <div className='productContainer'>
        
          {cart.map((item, id)=> <div key={item.id} className='col-md-4'>
              <Card style={{ width: '18rem',margin:"5px 10px" }}>
                <Card.Img variant="top" src={'holder.js/100px180'} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description.split(' ').splice(0,10).join(' ')}
                    </Card.Text>
                    <AiFillDelete
                        fontSize='20px'
                        style={{cursor:'pointer'}}
                        onClick={()=>
                          dispatch({
                            type:"REMOVE-FROM-CART",
                            payload: item,
                          })
                          }  
                      />
                  </Card.Body>
              </Card>
              </div>)}
        
      </div>
    
    <div className='filters'>
      <span className='mx-auto' style={{fontSize:'20px'}}>Total {cart.length} Items</span>
      <span className='mx-auto' style={{fontWeight:700,fontSize:20}}>Total price: {totalPrice}</span>
      <Button style={{margin:'10px'}} type='button' disabled={cart.length === 0}>
        Proceed to Checkout
      </Button>

    </div>
    </div>
    </>
  )
}
