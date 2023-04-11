import React from 'react'
import MultiActionAreaCard from './materialPage'
import { useSelector, useDispatch } from 'react-redux'
import { getCardList } from '../../Store/Actions/cardAction'
import { useEffect } from 'react'

const ProductCard = () => {
  const allProductLsit = useSelector((state) => state.card)
  const dispatch = useDispatch()
  // --- get all product List -----------------------
  useEffect(() => {
    dispatch(getCardList())
  }, [])

  return (
    <>
      {allProductLsit.allList.length > 0
        ? allProductLsit.allList.map((item, index) => {
            return (
              <>
                <MultiActionAreaCard key={index} details={item} />
              </>
            )
          })
        : 'null'}
    </>
  )
}

export default ProductCard
