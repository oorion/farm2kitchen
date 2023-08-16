import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import PhotoUploader from './PhotoUploader';
import { useDispatch, connect } from 'react-redux'
import { addItem } from '../reducers'
import { selectUser } from '../reducers'

function Profile(props) {
  const {user: {given_name, family_name}} = props

  return (
    <Form>
      <Form.Control type="input" placeholder="First Name" value={given_name} onChange={event => {}} />
      <Form.Control type="input" placeholder="Last Name" value={family_name} onChange={event => {}} />
    </Form>
  )
}

const mapStateToProps = (state) => {
  return {
    user: selectUser(state)
  }
}


export default connect(mapStateToProps)(Profile);