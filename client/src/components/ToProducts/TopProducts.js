import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import './topProduct.page.css'
import ProductCard from './ProductCard'

const TopProducts = () => {
  return (
    <>
      <div className='product_cards'>
        <p className='top_product_heading'>Best selling products</p>

        <div className='products_body'>
          <ProductCard />
        </div>
      </div>
    </>
  )
}

export default TopProducts
