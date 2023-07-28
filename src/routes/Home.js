import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
      <div className="App">
        <div className='company-name'>Farm to Kitchen</div>
        <header className="App-header">
          <div className='pitch-short'>Discover Fresh, Local Produce</div>
          <div className='pitch-long'>Support local farmers and enjoy farm-fresh ingredients.</div>
          <div className='question'>Are you a</div>
          <span>
            <Button href='what-to-sell' className='button'>Farmer</Button>
            <span style={{marginRight: 10, marginLeft: 10, fontSize: 20}}>or</span>
            <Button className='button'>Customer</Button>
          </span>
        </header>
      </div>
    );
  }