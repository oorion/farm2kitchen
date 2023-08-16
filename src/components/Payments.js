import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form'
import PhotoUploader from './PhotoUploader';
import { useDispatch, connect } from 'react-redux'
import { addItem } from '../reducers'
import { selectUser } from '../reducers'

function Payments(props) {
  return (
    <div>
      payments
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  }
}


export default connect(mapStateToProps)(Payments);