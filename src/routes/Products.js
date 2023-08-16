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

function Products(props) {
  return (
    <>
      <div className='question'>Products</div>
      <ProductForm />

      <Table responsive>
        <thead>
          <tr>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {
            props.items.map((item, index) => {
              return (
                <tr>
                  <td key={index}>
                    <img className='photo-list' src={item.imageUrl}></img>
                    <span style={{marginLeft: 10}}>{item.description}</span>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    items: selectItems(state)
  }
}
  
export default connect(mapStateToProps)(Products);