import React, { useState } from 'react';
import "./Products.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Logo from'../logo.png';
import { useNavigate } from "react-router-dom";
import ProfileForm from './ProfileForm'
import Sidebar from './Sidebar'
import Header from './Header'

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
      <Header show={show} toggle={toggle}>
        <ProfileForm></ProfileForm>
        <Button onClick={handleComplete}>Complete</Button>
      </Header>
    </div>
  );
};
