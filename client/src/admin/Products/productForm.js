import React, { useEffect, useState, memo, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField'
//

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import Button from '@mui/material/Button'

const ProductForm = (props) => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    productName: '',
    productTitle: '',
    productType: '',
    productDiscription: '',
    productImageUrl: '',
  })

  const InputChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  useLayoutEffect(() => {})

  return (
    <div className='form_container'>
      <div className='flext-box'>
        <div className='flex-box-item'>
          <TextField
            onChange={(e) => InputChange(e)}
            fullWidth
            name='productName'
            id='standard-basic'
            label='Product Name'
            variant='standard'
          />
        </div>

        <div className='flex-box-item'>
          {' '}
          <TextField
            onChange={(e) => InputChange(e)}
            // value={formData.lastName}
            name='productTitle'
            id='standardN-basic'
            label='Product Title'
            variant='standard'
          />{' '}
        </div>
        <div className='flex-box-item'>
          <TextField
            onChange={(e) => InputChange(e)}
            // value={formData.lastName}
            name='productDiscription'
            id='standard-basic'
            label='Product Discription'
            variant='standard'
          />
        </div>
        <div className='flex-box-item'>
          <TextField
            className='select_textarea'
            select
            label='Operating System *'
            size='small'
            fullWidth
            name='operatingSys'
          >
            <MenuItem value=''>Select</MenuItem>

            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </TextField>
        </div>
        <div className='flex-box-item'>
          <Button variant='contained' component='label'>
            Upload
            <input hidden accept='image/*' multiple type='file' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductForm
