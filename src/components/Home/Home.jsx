import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import homeImg from './assets/Images/hero-img.png';
import './assets/style/Home.css';
import { Link } from 'react-router-dom';
import { CartState } from '../../Context/Context';
export default function Home() {
  
  const{items,setItems} = CartState();
  const year = new Date().getFullYear()
  return (
    <>
    <section className='home_section'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="home_content">
              <p className='home_subtitle'>Trending product in {year}</p>
              <h2>Make Your Interior More Minimalistic & Modern </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta,
              aliquam voluptas repellendus possimus itaque rem ipsum nulla et tempore.</p>
              <Link className='mx-auto' to='Categories'>
                <Button style={{margin:'10px', fontWeight:500}} variant='success'>SHOP NOW</Button>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="home_image">
              <img src={homeImg} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container p-5">
      <div className="row g-5 mb-5">
        {items.map((item, id)=> <div key={id} className='col-md-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={'holder.js/100px180'} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description.split(' ').splice(0,10).join(' ')}
              </Card.Text>
              <Link to='Categories'>
              <Button variant="primary">Categories</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>)}
      </div>
    </div>
    </>
  )
}
