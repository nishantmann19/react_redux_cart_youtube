import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  // console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  return (
    <div className='container-fluid mt-3 p-0'>
      <h2 className='text-center'>Customer Recommendation</h2>

      <div className="row mt-3">
      <h2 className='heading px-5'>Recommend Just For You!</h2>
      <div className='row-heading px-5 gap-2'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{border:"none" }} className="card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    {/* <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button> */}
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
            
          })
        }
        </div>
      </div>
      
      <div className="row mt-3">
      <h2 className='heading px-5'>Frequently Bought Together</h2>
      <div className='row-heading px-5 gap-2'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{border:"none" }} className="card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    {/* <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button> */}
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
        </div>
      </div>
      
      <div className="row mt-3">
      <h2 className='heading px-5'>Best Seller</h2>
      <div className='row-heading px-5 gap-2'>
        {
          data.map((element, id) => {
            return (
              <>
                <Card style={{border:"none" }} className="card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    {/* <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button> */}
                    </div>
                  
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
        </div>

      </div>
    </div>
  )
}

export default Cards