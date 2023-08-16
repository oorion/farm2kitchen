import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import PhotoUploader from './PhotoUploader';
import { useDispatch, connect } from 'react-redux'
import { addItem } from '../reducers'
import { selectUser } from '../reducers'

function ProfileForm(props) {
  const {user: {given_name, family_name, picture}} = props

  const [streetAddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <div>
      <img src={picture} style={{width: 100, height: 100}}></img>
      <Form>
        <Form.Control type="input" placeholder="First Name" value={given_name} onChange={event => {}} />
        <Form.Control type="input" placeholder="Last Name" value={family_name} onChange={event => {}} />
        <Form.Control type="input" placeholder="Street Address" value={streetAddress} onChange={event => {setStreetAddress(event.target.value)}} />
        <Form.Control type="input" placeholder="City" value={city} onChange={event => {setCity(event.target.value)}} />
        <Form.Control type="input" placeholder="State" value={state} onChange={event => {setState(event.target.value)}} />
        <Form.Control type="input" placeholder="Zip Code" value={zipCode} onChange={event => {setZipCode(event.target.value)}} />
        <Form.Control type="input" placeholder="Phone number" value={phoneNumber} onChange={event => {setPhoneNumber(event.target.value)}} />
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: selectUser(state)
  }
}


export default connect(mapStateToProps)(ProfileForm);