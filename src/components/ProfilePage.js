import React, { useState } from 'react';
import "./ProductsPage.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Logo from'../logo.png';
import { useNavigate } from "react-router-dom";
import Profile from './Profile'

export default function ProductsPage() {
  const navigate = useNavigate()
  const handleComplete = () => {
    navigate('/payments')
  }

  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div style={{ display: "flex" }}>
          <aside className={"sidebar" + (show ? " hide-sidebar" : "")}>
            <Button variant="light" onClick={toggle}><i class="fa-solid fa-x"></i></Button>
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action >
                Products
              </ListGroup.Item>
              <ListGroup.Item action>
                Profile
              </ListGroup.Item>
              <ListGroup.Item action>
                Payments
              </ListGroup.Item>
            </ListGroup>
          </aside>
        </div>
      </div>
      <div className="dashboard">
        {show ? <Button variant="light" onClick={toggle}><i class="fa-solid fa-bars"></i></Button> : ''}
        <img  className='logo' src={Logo}/>
        <span className='company-name'>Farm 2 Kitchen</span>
        <Profile></Profile>
        <Button onClick={handleComplete}>Complete</Button>
      </div>
    </div>
  );
};
