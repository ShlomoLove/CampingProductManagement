import React from 'react'
import styled from 'styled-components'
import CenterWindow from '../Atoms/CenterWindow'
import TopBannerContainer from '../Molecules/TopBannerContainer'
import StyledButton from '../Atoms/StyledButton'
import ProductDisplay from '../Molecules/ProductDisplay'
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
        addVendor,
        returnPage
      } = props
 
  return (
    <>
      <TopBannerContainer>
        <UpperBannerContainer>
          <ReturnArrow returnPage={returnPage}/>
        </UpperBannerContainer>
        <LowerBannerContainer>
          <StyledButton
            margin={'20px'} 
            type='button' 
            value='Add Product'
            onClick={() => submitProduct('new') }
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
          addBrand={addBrand}
          addVendor={addVendor}
        />
      </CenterWindow>
    </>
  )
}

export default NewProduct