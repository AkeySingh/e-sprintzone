import React from 'react'
import ProductForm from './productForm'
import Typography from '@mui/material/Typography'

function Product() {
  return (
    <div className='full_container  container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-xs-12'>
          <div className='bodyTheem cardBody '>
            <Typography variant='h6' noWrap component='div'>
              Add Product
            </Typography>
            <ProductForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
