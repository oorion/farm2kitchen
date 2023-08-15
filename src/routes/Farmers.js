import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, connect } from 'react-redux'
import { addItem, selectItems } from '../reducers'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainWrapper from '../components/MainWrapper';
import ProductForm from '../components/ProductForm';
import Table from 'react-bootstrap/Table';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { addUser } from '../reducers'


function Farmers(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSuccess = (response) => {
    dispatch(addUser(response.credential))
    navigate('/products')
  }

  return (
    <MainWrapper>
      <GoogleLogin onSuccess={onSuccess} onError={() => {}} />
    </MainWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    items: selectItems(state)
  }
}
  
export default connect(mapStateToProps)(Farmers);