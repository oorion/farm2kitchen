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

function ProductsPage(props) {
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
      <div>
        <div style={{ display: "flex" }}>
          <aside className={"sidebar" + (show ? "" : " hide-sidebar")}>
            <Button variant="light" onClick={toggle}><i class="fa-solid fa-x"></i></Button>
            <ListGroup defaultActiveKey="products">
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
      <div className="dashboard">
        {show ? '' : <Button variant="light" onClick={toggle}><i class="fa-solid fa-bars"></i></Button>}
        <img  className='logo' src={Logo}/>
        <span className='company-name'>Farm 2 Kitchen</span>    
        <div className='question'>{show ? '' : 'Products'}</div>
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
  
export default connect(mapStateToProps)(ProductsPage);