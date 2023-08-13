import React from 'react';
import '../routes/App.css';
import Button from 'react-bootstrap/Button';

export default function IntakeOptions() {
    return (
      <span className='intake-options question'>
        <Button href='farmers' className='button' style={{marginRight: 20}}>Farmers</Button>
        <Button className='button'>Customers</Button>
      </span>
    );
  }