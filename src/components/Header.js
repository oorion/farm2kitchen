import React, { useState } from 'react';
import "./Products.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Logo from'../logo.png';
import { useNavigate } from "react-router-dom";
import { useDispatch, connect } from 'react-redux'
import ProductForm from './ProductForm';
import Table from 'react-bootstrap/Table';
import { addItem, selectItems } from '../reducers'
import Sidebar from './Sidebar'

export default function Header(props) {
  const {show, toggle} = props
  return (
    <div className="dashboard">
      {!show && <Button variant="light" onClick={toggle}><i class="fa-solid fa-bars"></i></Button>}
      <img  className='logo' src={Logo}/>
      <span className='company-name'>Farm 2 Kitchen</span>
      {props.children}
    </div>
  );
};