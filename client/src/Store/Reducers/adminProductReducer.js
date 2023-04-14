let initialState = {
  productName: '',
  productTitle: '',
  productType: '',
  productDiscription: '',
  productImageUrl: '',
}

function adminProductReducer(productState = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'AD_PRODUCT_TEXT_FEILD':
      return { ...productState, [payload.name]: payload.value }
    default:
      return productState
  }
}

export default adminProductReducer
