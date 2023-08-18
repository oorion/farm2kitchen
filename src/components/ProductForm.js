import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import PhotoUploader from './PhotoUploader';
import { useDispatch } from 'react-redux'
import { addItem } from '../reducers'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button'


export default function ProductForm() {
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [quantity, setQuantity] = useState('')
  const [unit, setUnit] = useState('')
  const [price, setPrice] = useState('')
  const [schedule, setSchedule] = useState('')
  const dispatch = useDispatch()
  const add = () => {
    dispatch(addItem({description, imageUrl, quantity, unit, price, schedule}))
    setDescription('')
    setImageUrl('')
    setQuantity('')
    setUnit('')
    setPrice('')
    setSchedule('')
  }

  return (
    <div style={{marginLeft: 10}}>
      <Form inline='false' style={{display: 'flex', marginBottom: 10}}>
        <Form.Control type="textarea" placeholder="Product description" value={description} onChange={event => setDescription(event.target.value)} style={{marginRight: 10, width: 500}}/>
        <PhotoUploader onFileSelect={(image) => {setImageUrl(window.URL.createObjectURL(image))}}></PhotoUploader>
      </Form>
      <Form.Control type="input" placeholder="Quantity available" value={quantity} onChange={event => setQuantity(event.target.value)} style={{width: 150, marginBottom: 10}}/>
      <DropdownButton
        as={ButtonGroup}
        key='unit'
        variant='secondary'
        title='Unit'
        style={{marginBottom: 10}}
        onSelect={val => setUnit(val)}
        value={unit}
      >
        <Dropdown.Item eventKey="Bunch">Bunch</Dropdown.Item>
        <Dropdown.Item eventKey="Dozen">Dozen</Dropdown.Item>
        <Dropdown.Item eventKey="Each">Each</Dropdown.Item>
        <Dropdown.Item eventKey="Ounce">Ounce</Dropdown.Item>
        <Dropdown.Item eventKey="Pint">Pint</Dropdown.Item>
        <Dropdown.Item eventKey="Pound">Pound</Dropdown.Item>
      </DropdownButton>
      <Form.Control type="input" placeholder="Price per unit" value={price} onChange={event => setPrice(event.target.value)} style={{width: 150, marginBottom: 10}}/>
      <DropdownButton
        as={ButtonGroup}
        key='schedule'
        variant='secondary'
        title='Harvest schedule'
        style={{marginBottom: 10}}
        onSelect={val => setSchedule(val)}
        value={schedule}
      >
        <Dropdown.Item eventKey="Daily">Daily</Dropdown.Item>
        <Dropdown.Item eventKey="Bi-weekly">Bi-weekly</Dropdown.Item>
        <Dropdown.Item eventKey="Weekly">Weekly</Dropdown.Item>
      </DropdownButton>
      <div><Button onClick={add}>Add</Button></div>
    </div>
  )
}