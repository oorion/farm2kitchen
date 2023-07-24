import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function WhatToSell() {
    const startFarmerIntake = () => {
      
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Farm to Kitchen</h1>
          <h3>What do you have to sell?</h3>
          <span>
            <Form inline style={{display: 'flex'}}>
              <Form.Control type="textarea" placeholder="Description" />
              <Form.Control type="text" placeholder="Quantity" />
              <Button variant="success">Enter</Button>
            </Form>
          </span>
        </header>
      </div>
    );
  }
  
  export default WhatToSell;