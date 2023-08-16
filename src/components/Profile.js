import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import PhotoUploader from './PhotoUploader';
import { useDispatch, connect } from 'react-redux'
import { addItem } from '../reducers'
import { selectUser } from '../reducers'

function Profile(props) {
  const {user: {given_name, family_name, picture}} = props

  return (
    <div>
      <img src={picture} style={{width: 100, height: 100}}></img>
      <Form>
        <Form.Control type="input" placeholder="First Name" value={given_name} onChange={event => {}} />
        <Form.Control type="input" placeholder="Last Name" value={family_name} onChange={event => {}} />
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: selectUser(state)
  }
}


export default connect(mapStateToProps)(Profile);