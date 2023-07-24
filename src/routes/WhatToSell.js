import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { addItem } from '../reducers'

function WhatToSell() {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('')
  const dispatch = useDispatch()
  const add = () => {
    dispatch(addItem({description: description, quantity: quantity}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Farm to Kitchen</h1>
        <h3>What do you have to sell?</h3>
        <span>
          <Form inline='true' style={{display: 'flex'}}>
            <Form.Control type="textarea" placeholder="Description" onChange={event => setDescription(event.target.value)} />
            <Form.Control type="text" placeholder="Quantity" onChange={event => setQuantity(event.target.value)} />
            <Button variant="success" onClick={add}>Enter</Button>
          </Form>
        </span>
      </header>
    </div>
  );
}
  
  export default WhatToSell;