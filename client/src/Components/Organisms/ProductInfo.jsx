import React from 'react'
import styled from 'styled-components'
import TopBannerContainer from '../Molecules/TopBannerContainer'
import CenterWindow from '../Atoms/CenterWindow'
import ProductDisplay from '../Molecules/ProductDisplay'
import StyledButton from '../Atoms/StyledButton'
import ReturnArrow from '../Atoms/ReturnArrow'


const UpperBannerContainer = styled.div`
  width: 100%; 
  display: flex;
  justify-content: flex-start; 
  align-items: center; 
`

const LowerBannerContainer = styled.div`
  width: 100%; 
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  margin-right: 60px; 
  margin-bottom: 15px;  
`

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
    addVendor,
    returnPage
  } = props
  return (
    <>
      <TopBannerContainer>
        <UpperBannerContainer>
          <ReturnArrow returnPage={returnPage} />
        </UpperBannerContainer>
        <LowerBannerContainer>
          <StyledButton
            margin={'20px'} 
            type='button' 
            value='Update Product'
            onClick={() => submitProduct('update') }
          />
        </LowerBannerContainer>
      </TopBannerContainer>/>
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
      </CenterWindow>
    </>
  )
}

export default ProductInfo