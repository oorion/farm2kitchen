import React, { useState } from 'react';
import "./Products.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Logo from'../logo.png';
import { useNavigate } from "react-router-dom";
import ProfileForm from './ProfileForm'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Payments(props) {
  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(!show);
  };
  
  return (
    <div style={{ display: "flex" }}>
      <Sidebar show={show} toggle={toggle} activeKey='payments'></Sidebar>
      <Header show={show} toggle={toggle}>
        <div>Payments Placeholder</div>
      </Header>
    </div>
  )
}