import React from 'react'
import styled from 'styled-components'
import CenterWindow from '../Atoms/CenterWindow'
import TopBannerContainer from '../Molecules/TopBannerContainer'
import StyledButton from '../Atoms/StyledButton'
import ProductDisplay from '../Molecules/ProductDisplay'

const NewProduct = props => {
  const {submitProduct,
        newName, 
        newPrice,
        newDescription,
        newSku,
        newBrand,
        updateValue, 
        newVendor,
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
          addBrand={addBrand}
          addVendor={addVendor}
        />
        <StyledButton
          margin={'20px'} 
          type='button' 
          value='Add Product'
          onClick={() => submitProduct('new') }
        />
      </CenterWindow>
    </>
  )
}

export default NewProduct