import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import './auth.page.css'
import { handleChange, addUser } from '../../Store/Actions/signupAction'

import { FaSkullCrossbones } from 'react-icons/fa'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  bgcolor: 'white',
  border: '1px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 2,
}

const Login = (props) => {
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.signup)

  const InputChange = (e) => {
    const { name, value } = e.target
    dispatch(handleChange(name, value))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser(formData))
  }

  return (
    <>
      <Modal
        open={props.isOpen}
        onClose={() => props.handleClose()}
        aria-labelledby='child-modal-title'
        aria-describedby='child-modal-description'
      >
        <Box className='modal_box' sx={{ ...style }} variant='rounded'>
          <div className='flex-box'>
            <div className='textField'>
              <TextField
                className='input'
                onChange={(e) => InputChange(e)}
                value={formData.firstName}
                name='userName'
                id='standard-basic'
                label='User Name'
                variant='standard'
              />
            </div>
          </div>

          <div className='flex-box'>
            <div className='textField'>
              <TextField
                className='input'
                onChange={(e) => InputChange(e)}
                value={formData.password}
                name='password'
                id='standard-basic'
                label='Password'
                variant='standard'
              />
            </div>
          </div>

          <div className='signup_button_box'>
            <Button variant='outlined' color='secondary' onClick={(e) => handleSubmit(e)}>
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

export default memo(Login)
