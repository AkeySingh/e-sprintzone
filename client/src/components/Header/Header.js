import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import './header.page.css'
import { Link } from 'react-router-dom'
import Signup from '../Authentication/Signup'
import Login from '../Authentication/Login'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state) => state.signup)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon className='child-btn' />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Button color='inherit'>
              <Link className='Link_item' to='/'>
                <div className='child-btn'>Home</div>
              </Link>
            </Button>
            <Button color='inherit'>
              <Link className='Link_item' to='/shop'>
                <div className='child-btn'>shop</div>
              </Link>
            </Button>
            <Button color='inherit'>
              <div className='child-btn'>About</div>
            </Button>
            <Button color='inherit'>
              <div className='child-btn'>Blog</div>
            </Button>
            <Button color='inherit'>
              <div className='child-btn'>News</div>
            </Button>
          </Typography>

          <Button
            color='inherit'
            onClick={() => dispatch({ type: 'Is_OPEN_MODEL', payload: true })}
            className='signup_button'
          >
            Sign Up
          </Button>
          <Button color='inherit' onClick={() => dispatch({ type: 'Is_OPEN_LOGIN_MODEL', payload: true })}>
            Login
          </Button>
        </Toolbar>

        <Signup isOpen={formData.isOpen} handleClose={() => dispatch({ type: 'Is_OPEN_MODEL', payload: false })} />
        <Login
          isOpen={formData.isLogInOpen}
          handleClose={() => dispatch({ type: 'Is_OPEN_LOGIN_MODEL', payload: false })}
        />
      </AppBar>
    </Box>
  )
}

export default Header
