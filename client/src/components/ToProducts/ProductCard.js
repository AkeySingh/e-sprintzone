import React from 'react'

const ProductCard = () => {
  return (
    <div className='products_body'>
      <div className='card_body'>
        <div className='card_image'>
          <img src='./gift02.jpg' />
        </div>

        <div className='card_content'>
          <div className='card_price'>Price </div>
        </div>
      </div>
      <div className='card_body'>
        <div className='card_image'>
          <img src='https://fastly.picsum.photos/id/935/200/200.jpg?hmac=WNkIQ-NNhosb-4Qfz8Tixwp7-HVS540Z2dS0VDyJ5ac' />
        </div>

        <div className='card_content'>
          <div className='card_price'>Price </div>
        </div>
      </div>
      <div className='card_body'>
        <div className='card_image'>
          <img src='https://fastly.picsum.photos/id/935/200/200.jpg?hmac=WNkIQ-NNhosb-4Qfz8Tixwp7-HVS540Z2dS0VDyJ5ac' />
        </div>

        <div className='card_content'>
          <div className='card_price'>Price </div>
        </div>
      </div>

      <div className='card_body'>
        <div className='card_image'>
          <img />
        </div>

        <div className='card_content'>
          <div className='card_price'>Price </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
