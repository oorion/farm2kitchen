import React, { useState } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, connect } from 'react-redux'
import { addItem, selectItems } from '../reducers'
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainWrapper from '../components/MainWrapper';
import ProductForm from '../components/ProductForm';


function Farmers(props) {
  return (
    <MainWrapper>
      <div className='question'>What do you have to sell?</div>
      <ListGroup>
        {
          props.items.map((item) => {
            return (
              <ListGroup.Item action>
                <span>{item.description}</span>
              </ListGroup.Item>
            )
          })
        }
      </ListGroup>
      <ProductForm />
    </MainWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    items: selectItems(state)
  }
}
  
export default connect(mapStateToProps)(Farmers);