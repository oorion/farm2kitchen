import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

export default function Home() {
    return (
        <div className="App">
        <header className="App-header">
          <h1>Farm to Kitchen</h1>
          <h3>Are you a</h3>
          <span>
            <Button variant="primary" href='what-to-sell'>Farmer</Button>
            <span style={{marginRight: 10, marginLeft: 10, fontSize: 20}}>or</span>
            <Button variant="primary">Customer</Button>
          </span>
        </header>
      </div>
    );
  }