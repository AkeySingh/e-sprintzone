import React, { useState, memo } from 'react'
import { useDispatch } from 'react-redux'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'

const ProductForm = (props) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    productName: '',
    productTitle: '',
    productType: '',
    productDiscription: '',
    productImageUrl: '',
    category: '',
    subCategory: '',
  })

  // const [categorie, SetCategory] = useState({
  //   mens: [],
  //   womens: [],
  //   childrens: [],
  // })

  const InputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className='flex-box'>
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
          <TextField
            fullWidth
            onChange={(e) => InputChange(e)}
            value={formData.lastName}
            name='productTitle'
            id='standardN-basic'
            label='Product Title'
            variant='standard'
          />
        </div>
        <div className='flex-box-item'>
          <TextField
            fullWidth
            onChange={(e) => InputChange(e)}
            value={formData.lastName}
            name='productDiscription'
            id='standard-basic'
            label='Product Discription'
            variant='standard'
          />
        </div>
        <div className='flex-box-item'>
          <TextField
            select
            fullWidth
            name='category'
            onChange={(e) => InputChange(e)}
            value={formData.category}
            className='select_textarea'
            label='Category'
            size='small'
          >
            <MenuItem value=''>Select</MenuItem>
            <MenuItem value={'men'}>Men's</MenuItem>
            <MenuItem value={'women'}>Women's</MenuItem>
            <MenuItem value={'child'}>Children's</MenuItem>
          </TextField>
        </div>
        <div className='flex-box-item'>
          <TextField
            textarea
            fullWidth
            name='subCategory'
            onChange={(e) => InputChange(e)}
            value={formData.subCategory}
            className='select_textarea'
            label='Sub Category'
            size='small'
          />
        </div>
        <div className='flex-box-item'>
          <Button variant='outlined' color='secondary' component='label'>
            Uplodad Image
            <input hidden accept='image/*' multiple type='file' onChange={(e) => InputChange(e)} />
          </Button>
        </div>
      </div>

      <div className='flex-box'>
        <div className='flex-box-item'>
          <Button variant='contained' color='success' component='label' onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </div>
      </div>
    </>
  )
}

export default memo(ProductForm)
