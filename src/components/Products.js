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

function Products(props) {
  const navigate = useNavigate()
  const handleComplete = () => {
    navigate('/profile')
  }

  const [show, setShow] = useState(true);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar show={show} toggle={toggle} activeKey='products'></Sidebar>
      <div className="dashboard">
        {!show && <Button variant="light" onClick={toggle}><i class="fa-solid fa-bars"></i></Button>}
        <img  className='logo' src={Logo}/>
        <span className='company-name'>Farm 2 Kitchen</span>    
        <div className='question'>{!show && 'Products'}</div>
        <ProductForm />
        <Table responsive>
          <thead>
            <tr>
              <th>Product description</th>
              <th>Quantity available</th>
              <th>Unit</th>
              <th>Price per unit</th>
              <th>Harvest schedule</th>
            </tr>
          </thead>
          <tbody>
            {
              props.items.map((item, index) => {
                return (
                  <tr>
                    <td key='description'>
                      {item.imageUrl && <img className='photo-list' src={item.imageUrl}></img>}
                      <span style={{marginLeft: 10}}>{item.description}</span>
                    </td>
                    <td key='quantity'>{item.quantity}</td>
                    <td key='unit'>{item.unit}</td>
                    <td key='price'>{item.price}</td>
                    <td key='schedule'>{item.schedule}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        <Button onClick={handleComplete}>Complete</Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: selectItems(state)
  }
}
  
export default connect(mapStateToProps)(Products);