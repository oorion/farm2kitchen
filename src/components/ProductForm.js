import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import PhotoUploader from './PhotoUploader';
import { useDispatch } from 'react-redux'
import { addItem } from '../reducers'

export default function ProductForm() {
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const add = (imageUrl) => {
    dispatch(addItem({description: description, imageUrl: imageUrl}))
    setDescription('')
  }

  return (
    <Form inline='true' style={{display: 'flex'}}>
      <Form.Control type="textarea" placeholder="Description" value={description} onChange={event => setDescription(event.target.value)} />
      <PhotoUploader onFileSelect={(image) => {add(window.URL.createObjectURL(image))}}></PhotoUploader>
    </Form>
  )
}