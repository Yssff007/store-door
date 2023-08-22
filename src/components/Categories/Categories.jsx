import React from 'react';
import './Categories.css'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { CartState } from '../../Context/Context';
import Card from 'react-bootstrap/Card';
export default function Categories() {
  const {state:{cart},
  dispatch
 }= CartState();
  const [categories,setCategories] = useState([]);
  const [items,setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [success,setSuccess] = useState(false);
  async function getCategories(){
    let {data} = await Axios.get(`http://localhost:9999/api/categories`);
    
    
    setCategories(data)
  }

  async function getItems(categoryId){
    let {data} = await Axios.get(`http://localhost:9999/api/items`); 
    setItems(data)
  }
  const filtering = (categoryId)=>{
    const result = items.filter((item)=>{ 
      return item.category_id === categoryId
    });
    console.log(result);
    setFilteredItems(result);
    setSuccess(true);

  }
  
  useEffect(()=>{ 
    getCategories()
    getItems()
  },[]);
  
  

  return (
    <>
    <div className='Home'>
      <div className='filters'>
        <span className='mx-auto' style={{fontSize:'20px'}}>Categories</span>
        {categories.map((category,id)=> 
        <Button 
         onClick={()=>filtering(category.id)}
         key={id} style={{margin:'10px', fontWeight:500}} variant='light'>{category.name}
         </Button>)}
      </div>
      <div className='productContainer'>
      {success? (filteredItems.map((item, id)=> <div key={id} className='col-md-4 mt-3 '>
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
          </div>)):(items.map((item, id)=> <div key={id} className='col-md-4 mt-3 '>
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
          </div>))}
        </div>
    </div>
      
      
    </>
  )
}
