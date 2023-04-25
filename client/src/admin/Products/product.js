import React from 'react'
import ProductForm from './productForm'

function Product() {
  return (
    <div className='full_container  container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-xs-12'>
          <div className='bodyTheem cardBody '>
            <p> Add Product</p>
            <ProductForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
