import React, { useState } from 'react';
import "./Products.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Logo from'../logo.png';
import { useNavigate } from "react-router-dom";
import ProfileForm from './ProfileForm'
import Sidebar from './Sidebar'

export default function Products() {
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
        {!show && <Button variant="light" onClick={toggle}><i class="fa-solid fa-bars"></i></Button>}
        <img  className='logo' src={Logo}/>
        <span className='company-name'>Farm 2 Kitchen</span>
        <ProfileForm></ProfileForm>
        <Button onClick={handleComplete}>Complete</Button>
      </div>
    </div>
  );
};
