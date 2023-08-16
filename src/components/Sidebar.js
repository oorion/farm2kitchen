import React, { useState } from 'react';
import "./ProductsPage.css";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Logo from'../logo.png';
import { useNavigate } from "react-router-dom";
import { useDispatch, connect } from 'react-redux'
import ProductForm from './ProductForm';
import Table from 'react-bootstrap/Table';
import { addItem, selectItems } from '../reducers'

export default function Sidebar(props) {
  const {show, toggle, activeKey} = props
  return (
    <div>
      <div style={{ display: "flex" }}>
        <aside className={"sidebar" + (show ? "" : " hide-sidebar")}>
          <Button variant="light" onClick={toggle}><i class="fa-solid fa-x"></i></Button>
          <ListGroup defaultActiveKey={activeKey}>
            <ListGroup.Item action href="products">
              Products
            </ListGroup.Item>
            <ListGroup.Item action href="profile">
              Profile
            </ListGroup.Item>
            <ListGroup.Item action href="payments">
              Payments
            </ListGroup.Item>
          </ListGroup>
        </aside>
      </div>
    </div>
  );
};
