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


function Farmers(props) {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const add = () => {
    dispatch(addItem({description: description}))
    setDescription('')
  }


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
      <span>
        <Form inline='true' style={{display: 'flex'}}>
          <Form.Control type="textarea" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)} />
          <Button variant="success" onClick={add}>Add</Button>
        </Form>
      </span>
    </MainWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    items: selectItems(state)
  }
}
  
export default connect(mapStateToProps)(Farmers);