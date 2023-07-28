import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, connect } from 'react-redux'
import { addItem, selectItems } from '../reducers'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WhatToSell(props) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const dispatch = useDispatch()
  const add = () => {
    dispatch(addItem({description: description, quantity: quantity}))
    setDescription('')
    setQuantity('')
  }


  return (
    <div className="App">
      <div className='App-header'>
        <div className='company-name'>Farm to Kitchen</div>
      </div>
      <header className="App-body">
        <h3>What do you have to sell?</h3>
        <ListGroup>
          {
            props.items.map((item) => {
              return (
                <ListGroup.Item action>
                <span>{item.description}</span>
                <span>{item.quantity}</span>
                </ListGroup.Item>
              )
            })
          }
        </ListGroup>
        <span>
          <Form inline='true' style={{display: 'flex'}}>
            <Form.Control type="textarea" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)} />
            <Form.Control type="text" placeholder="Quantity" value={quantity} onChange={event => setQuantity(event.target.value)} />
            <Button variant="success" onClick={add}>Add</Button>
          </Form>
        </span>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: selectItems(state)
  }
}
  
export default connect(mapStateToProps)(WhatToSell);