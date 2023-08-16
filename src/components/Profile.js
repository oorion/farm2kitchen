import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import PhotoUploader from './PhotoUploader';
import { useDispatch } from 'react-redux'
import { addItem } from '../reducers'

export default function Profile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  return (
    <Form>
      <Form.Control type="input" placeholder="First Name" value={firstName} onChange={event => setFirstName(event.target.value)} />
      <Form.Control type="input" placeholder="Last Name" value={lastName} onChange={event => setLastName(event.target.value)} />
    </Form>
  )
}