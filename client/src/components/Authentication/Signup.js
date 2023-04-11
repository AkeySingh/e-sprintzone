import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './auth.page.css'

import { FaSkullCrossbones } from 'react-icons/fa'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  border: '1px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 2,
}

const Signup = (props) => {
  return (
    <>
      <Modal
        open={props.isOpen}
        onClose={() => props.handleClose()}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box className='modal_box' sx={{ ...style }} variant='rounded'>
          <div className='flext-box'>
            <TextField id='standard-basic' label='First Name' variant='standard' />
            <TextField id='standard-basic' label='Last Name' variant='standard' />
          </div>

          <div className='flext-box'>
            <TextField id='standard-basic' label='Email' variant='standard' />
            <TextField id='standard-basic' label='Phone' variant='standard' />
          </div>

          <div className='flext-box'>
            <TextField id='standard-basic' label='Password' variant='standard' helperText='2222222222' />
            <TextField id='standard-basic' label='Confirm Password' variant='standard' />
          </div>

          <div className='signup_button_box'>
            <Button variant='outlined' color='secondary'>
              Submit
            </Button>
            <Button onClick={() => props.handleClose()} variant='outlined' color='error'>
              Cancel
            </Button>
          </div>
          <span onClick={() => props.handleClose()} className='cross' variant='outlined' color='error'>
            <FaSkullCrossbones />
          </span>
        </Box>
      </Modal>
    </>
  )
}

export default Signup
