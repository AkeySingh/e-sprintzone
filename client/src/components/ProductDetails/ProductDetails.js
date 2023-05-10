import React from 'react'

const ProductDetails = () => {
  return (
    <>
      <div className='full_container  container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-xs-12'>
            <h1>helo</h1>
            <div className='product_details'>
              <div className='product_details_item'>
                <div className='product_details_imageList'>
                  <div className='list_item'>
                    <img className='item_image' src='../../images/gitft01.jpg' />
                  </div>

                  <div>
                    <img className='item_image' />
                  </div>

                  <div>
                    <img className='item_image' />
                  </div>

                  <div>
                    <img className='item_image' />
                  </div>
                </div>
                <div className='product_details_image inline-block'>
                  <img className='main_item_image' src='images/' />
                </div>
              </div>
              <div className='product_details_item'>
                <div> Title </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails
