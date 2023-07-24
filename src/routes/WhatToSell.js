import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, connect } from 'react-redux'
import { addItem, selectItems } from '../reducers'


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
      <header className="App-header">
        <h1>Farm to Kitchen</h1>
        <h3>What do you have to sell?</h3>
        {
          props.items.map((item) => {
            return (
              <div>
                <span>{item.description}</span>
                <span>{item.quantity}</span>
              </div>
            )
          })
        }
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