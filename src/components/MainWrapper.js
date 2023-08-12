import React from 'react';
import '../routes/App.css';
import Button from 'react-bootstrap/Button';

export default function MainWrapper(props) {
    return (
      <div className="App">
        <div className='App-header'>
          <div className='company-name'>Farm to Kitchen</div>
        </div>
        <header className="App-body">
          <div className='pitch-short'>Discover Fresh, Local Produce</div>
          <div className='pitch-long'>Support local farmers and enjoy farm-fresh ingredients</div>
          {props.children}
        </header>
      </div>
    );
  }