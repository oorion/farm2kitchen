import React, { useState } from 'react';
import "./ProductsPage.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Logo from'../logo.png';
import { useNavigate } from "react-router-dom";
import Profile from './Profile'
import Sidebar from './Sidebar'

export default function ProductsPage() {
  const navigate = useNavigate()
  const handleComplete = () => {
    navigate('/payments')
  }

  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar show={show} toggle={toggle} activeKey='profile'></Sidebar>
      <div className="dashboard">
        {show ? '' : <Button variant="light" onClick={toggle}><i class="fa-solid fa-bars"></i></Button>}
        <img  className='logo' src={Logo}/>
        <span className='company-name'>Farm 2 Kitchen</span>
        <Profile></Profile>
        <Button onClick={handleComplete}>Complete</Button>
      </div>
    </div>
  );
};
