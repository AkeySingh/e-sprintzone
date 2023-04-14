import React, { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const ProductForm = (props) => {
  return (
    <div className='form_container'>
      <div className='flext-box'>
        <TextField
          // onChange={(e) => InputChange(e)}
          // value={formData.firstName}
          name='firstName'
          id='standard-basic'
          label='First Name'
          variant='standard'
        />
        <TextField
          // onChange={(e) => InputChange(e)}
          // value={formData.lastName}
          name='lastName'
          id='standard-basic'
          label='Last Name'
          variant='standard'
        />
        <TextField
          // onChange={(e) => InputChange(e)}
          // value={formData.lastName}
          name='lastName'
          id='standard-basic'
          label='Last Name'
          variant='standard'
        />
      </div>
    </div>
  )
}

export default ProductForm
