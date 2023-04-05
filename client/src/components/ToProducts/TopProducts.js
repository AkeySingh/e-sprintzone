import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import './topProduct.page.css'
import ProductCard from './ProductCard'

const TopProducts = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className='product_cards'>
        <p className='top_product_heading'>Top Products</p>
        <ProductCard />
      </div>
    </>
  )
}

export default TopProducts
