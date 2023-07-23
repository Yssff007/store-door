import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import homeImg from './assets/Images/hero-img.png';
import './assets/style/Home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  const year = new Date().getFullYear
  const [items,setItems] = useState([]);
  async function getItems(){
    let {data} = await Axios.get(``);
    setItems(data.results)
  }
  useEffect(()=>{ 
    getItems();
  },[]);
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
              <button type="button" class="btn btn-success">SHOP NOW</button>
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
        {items.map((item, index)=> <div key={index} className='col-md-4'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={``} />
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
        
        {/* <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}
      </div>
    </div>
    </>
  )
}
