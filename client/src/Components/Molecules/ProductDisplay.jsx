import React, { useState } from 'react'
import styled from 'styled-components'
import InnerContainer from '../Atoms/InnerContainer'
import StyledProductArea from '../Atoms/StyledProductArea'
import StyledProductInput from '../Atoms/StyledProductInput'
import StyledButton from '../Atoms/StyledButton'

const StyledSelect = styled.select`
  width: 80%;
  height: 35px;
  border-radius: 10px;
  font-size: 18px; 
  font-family: 'Roboto', sans-serif; 
  font-size: 20px; 
  height: 35px;
  width: 80%;
  outline: none;
  background: #EFEFF4;
  border: solid #EFEFF4;
  box-shadow: 1px 1px 20px 1px rgba(33, 27, 27, .4);
  transition: all 0.3s ease; 
  :focus {
    border-color: #00b300;
  }

  @media(max-width: 480px) {
    width: 360px;
    height: 35px; 
  }
`

const StyledOption = styled.option`
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 18px;
  color: #A9A9A9;  
`

const StyledText = styled.h4`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 22px;
  color: #A9A9A9;
  margin: 3px;  
`

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  align-items: center;
  width: 100%; 
`

const ProductDisplay = props => {
  const [dislayVendor, setDisplayVendor] = useState('')

  const {
      newName, 
      newPrice,
      newDescription,
      newSku,
      newBrand,
      updateValue,
      newVendor,
      brands,
      vendors,
      addABrand,
      addAVendor,
      addBrand,
      addVendor
  } = props

  return (
    <InnerContainer>
      <StyledProductInput
        value={newName}
        height={'35px'}
        width={'80%'}
        placeholder='Product Name'
        onChange={(e) => updateValue(e.target.value, 'newName')}
      />
      <StyledProductArea
        value={newDescription}
        height={'90px'}
        width={'80%'}
        placeholder='Product Description'
        onChange={(e) => updateValue(e.target.value, 'newDescription')}
      />
      <StyledText>Choose an Current Brand</StyledText>
      <StyledSelect 
        onChange={(e) => updateValue(e.target.value, 'newBrand')}
        value={newBrand}
      >
        <StyledOption>Choose A Brand</StyledOption>
        {brands.map(brand => (
          <StyledOption value={brand.id}>{brand.name}</StyledOption>
        ))}
      </StyledSelect>
      <StyledText>ADD A NEW BRAND</StyledText>
      <StyledInputContainer>
        <StyledProductInput
          value={addABrand}
          height={'35px'}
          width={'45%'}
          placeholder='Brand'
          onChange={(e) => updateValue(e.target.value, 'addABrand')}
        />
        <StyledButton
          margin={'20px'} 
          type='button' 
          value='Add Brand'
          onClick={() => addBrand() }
        />
      </StyledInputContainer>
      <StyledText>Choose an Current Vendor</StyledText>
      <StyledSelect 
        onChange={(e) => updateValue(e.target.value, 'newVendor')}
        value={newVendor}
      >
        <StyledOption>Choose A Vendor</StyledOption>
        {vendors.map(vendor => (
          <StyledOption value={vendor.id}>{vendor.name}</StyledOption>
        ))}
      </StyledSelect>
      <StyledText>Or ADD NEW Vendor</StyledText>
      <StyledInputContainer>
        <StyledProductInput
          value={addAVendor}
          height={'35px'}
          width={'45%'}
          placeholder='Vendor'
          onChange={(e) => updateValue(e.target.value, 'addAVendor')}
        />
        <StyledButton
          margin={'20px'} 
          type='button' 
          value='Add Vendor'
          onClick={() => addVendor() }
        />
      </StyledInputContainer>
      <StyledProductInput
        value={newPrice}
        height={'35px'}
        width={'80%'}
        placeholder='Product Price'
        onChange={(e) => updateValue(e.target.value, 'newPrice')}
      />
      <StyledProductInput
        value={newSku}
        height={'35px'}
        width={'80%'}
        placeholder='Product SKU'
        onChange={(e) => updateValue(e.target.value, 'newSku')}
      />
    </InnerContainer>
  )
}

  export default ProductDisplay