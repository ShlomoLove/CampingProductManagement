import React from 'react'
import styled from 'styled-components'
import CenterWindow from '../Atoms/CenterWindow'
import TopBannerContainer from '../Molecules/TopBannerContainer'
import InnerContainer from '../Atoms/InnerContainer'
import StyledButton from '../Atoms/StyledButton'

const StyledProductInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  outline: none; 
  height: ${props => props.height};
  width: 80%;
  background: #EFEFF4;
  border: solid #EFEFF4;  
  border-radius: 10px;
  margin: 30px;
  box-shadow: 1px 2px 20px 3px rgba(33, 27, 27, .4);
  transition: all 0.3s ease; 
  
  :focus {
    border-color: #00b300;
  }
`

const InputContainer = styled.div`
  width: 95%; 
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
`



const NewProduct = props => {
  const {submitNewProduct,
        newName, 
        newPrice,
        newDescription,
        newSku,
        newBrand,
        updateValue
      } = props
  return (
    <>
      <TopBannerContainer/>
      <CenterWindow>
        <InnerContainer>
          <StyledProductInput
            value={newName}
            height={'35px'}
            placeholder='Product Name'
            onChange={(e) => updateValue(e, 'newName')}
          />
          <StyledProductInput
            value={newDescription}
            height={'90px'}
            placeholder='Product Description'
            onChange={(e) => updateValue(e, 'newDescription')}
          />
          <StyledProductInput
            value={newPrice}
            height={'35px'}
            placeholder='Product Price'
            onChange={(e) => updateValue(e, 'newPrice')}
          />
          <StyledProductInput
            value={newSku}
            height={'35px'}
            placeholder='Product SKU'
            onChange={(e) => updateValue(e, 'newSku')}
          />
          <StyledButton
            margin={'20px'} 
            type='button' 
            value='Add Product'
            onClick={() => submitNewProduct() }
          />
        </InnerContainer>

      </CenterWindow>
    </>
  )
}

export default NewProduct