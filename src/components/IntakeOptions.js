import React from 'react';
import '../routes/App.css';
import Button from 'react-bootstrap/Button';

export default function IntakeOptions() {
    return (
      <>
        <div className='question'>Are you a</div>
        <span className='intake-options'>
          <Button href='what-to-sell' className='button'>Farmer</Button>
          <span style={{marginRight: 10, marginLeft: 10, fontSize: 20}}>or</span>
          <Button className='button'>Customer</Button>
        </span>
      </>
    );
  }