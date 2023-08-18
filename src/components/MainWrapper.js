import React from 'react';
import '../routes/App.css';
import Button from 'react-bootstrap/Button';
import Logo from'../logo.png';

export default function MainWrapper(props) {
    return (
      <div className="App">
        <header className="App-body">
          <img  className='logo' src={Logo} style={{width: 200, height: 200}}/>
          <div className='company-name' style={{marginBottom: 20}}>Farm 2 Kitchen</div>
          <div className='pitch-short'>Discover Fresh, Local Produce</div>
          <div className='pitch-long' style={{marginBottom: 20}}>Support local farmers and enjoy farm-fresh ingredients</div>
          {props.children}
        </header>
      </div>
    );
  }