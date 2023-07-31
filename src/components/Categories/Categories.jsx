import React from 'react';
import './Categories.css'
import Button from 'react-bootstrap/Button';

import {Link, Outlet}  from "react-router-dom";
export default function Categories() {
  
  return (
    <>
    <div className='Home'>
      <div className='filters'>
        <span className='mx-auto' style={{fontSize:'20px'}}>Categories</span>
        <Link className='mx-auto' to='BedRoom'>
         <Button style={{margin:'10px', fontWeight:500}} variant='light'>Bed Room</Button>
        </Link>
        <Link className='mx-auto' to='LivingRoom'>
         <Button style={{margin:'10px', fontWeight:500}} variant='light'>LivingRoom</Button>
        </Link>
        <Link className='mx-auto' to='Kitchen'>
         <Button style={{margin:'10px', fontWeight:500}} variant='light'>Kitchen</Button>
        </Link>
        <Link className='mx-auto' to='DinningRoom'>
         <Button style={{margin:'10px', fontWeight:500}} variant='light'>DinningRoom</Button>
        </Link>

      </div>
      <div className="container p-5">
        <div className="row g-5 mb-5">
          <Outlet></Outlet>
          
        </div>
      </div>
    </div>
    </>
  )
}
