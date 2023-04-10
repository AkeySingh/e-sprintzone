import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Grid from '@mui/material/Unstable_Grid2'
import Box from '@mui/material/Box'
import './header.page.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='' aria-label='menu' sx={{ mr: 2 }}>
            <MenuIcon className='child-btn' />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Button color='inherit'>
              <div className='child-btn'>Home</div>
            </Button>
            <Button color='inherit'>
              <div className='child-btn'>shop</div>
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
          <Link to='/signup'>
            <Button color='inherit' className='signup_button'>
              Sign Up
            </Button>
          </Link>

          {/* <Link to='/login'> */}
          <Button color='inherit'>Login</Button>
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
