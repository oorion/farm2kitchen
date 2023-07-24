import { TextField } from '@mui/material';
import React from 'react';
import './App.css';

function WhatToSell() {
    const startFarmerIntake = () => {
      
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1>Farm to Kitchen</h1>
          <h3>What do you have to sell?</h3>
          <span>
            <TextField id="outlined-basic" label="Description" variant="outlined" style={{marginRight: 10}}/>
            <TextField id="outlined-basic" label="Quantity" variant="outlined" />
          </span>
        </header>
      </div>
    );
  }
  
  export default WhatToSell;