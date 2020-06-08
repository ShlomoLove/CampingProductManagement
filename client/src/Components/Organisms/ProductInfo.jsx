import React from 'react'
import styled from 'styled-components'
import TopBannerContainer from '../Molecules/TopBannerContainer'
import CenterWindow from '../Atoms/CenterWindow'
import ProductDisplay from '../Molecules/ProductDisplay'
import StyledButton from '../Atoms/StyledButton'

const ProductInfo = props => {
  const { featuredProduct,
    newName,
    newPrice,
    newDescription,
    newSku,
    newBrand,
    newVendor,
    updateValue,
    submitProduct,
    vendors,
    brands,
    addABrand,
    addAVendor,
    addBrand,
    addVendor
  } = props
  return (
    <>
      <TopBannerContainer/>
      <CenterWindow>
        <ProductDisplay
          newName={newName}
          newPrice={newPrice}
          newDescription={newDescription}
          newSku={newSku}
          newBrand={newBrand}
          newVendor={newVendor}
          updateValue={updateValue}
          vendors={vendors}
          brands={brands}
          addABrand={addABrand}
          addAVendor={addAVendor}
          addVendor={addVendor}
          addBrand={addBrand}
        />
        <StyledButton
          margin={'20px'} 
          type='button' 
          value='Update Product'
          onClick={() => submitProduct('update') }
        />
      </CenterWindow>
    </>
  )
}

export default ProductInfo