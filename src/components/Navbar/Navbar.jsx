import {AiFillDelete} from 'react-icons/ai'
import {Link } from 'react-router-dom'
import React from 'react';
import './assets/Navbar.css'
import { Badge, Button, Dropdown, Nav } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import {FaCartArrowDown} from 'react-icons/fa'
import { CartState } from '../../Context/Context'
import Card from 'react-bootstrap/Card';
export default function Navbar() {
  
  const{state:{cart},
    dispatch,items,setItems
} = CartState();

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light by-5">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">
      <i className='fas fa-shop px-2'></i>
      Store Door
    </Link>
    <div className="centering collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mx-auto mb-lg-0 px-auto  ">
        <li className="nav-item  ">
          <Link className="nav-Link text-dark active text-decoration-none mx-1" aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='About'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Services'>Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Cart'>Cart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link text-dark text-decoration-none mx-1" to='Categories'>Categories</Link>
        </li>
        
      </ul>
    </div>
    <Nav>
      <Dropdown>
          <Dropdown.Toggle variant='success'>
            <FaCartArrowDown color='black' fontSize='25px' />
            <Badge bg="success">{cart.length}</Badge>
          </Dropdown.Toggle>
          <DropdownMenu style={{minWidth:370}}>
            {
              cart.length>0?(
                <>
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
                      <Link to='/Cart'>
                        <Button style={{width:'95%', margin:"5px 10px"}}>
                          Go to Cart
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </div>)}
                
                </>
              ):
              (<span style={{padding:10}}>Cart is Empty!</span>)
            }
            
            
          </DropdownMenu>
      </Dropdown>
    </Nav>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mx-auto mb-lg-0 ">
        <li className="nav-item  ">
          <Link className="nav-Link text-dark active text-decoration-none mx-1" aria-current="page" to='Login'>Login</Link>
        </li>
        <li className="nav-item  ">
          <Link className="nav-Link text-dark active text-decoration-none mx-1" aria-current="page" to='Register'>Register</Link>
        </li>
      </ul>
    </div>

  </div>
</nav>
    </>
  )
}