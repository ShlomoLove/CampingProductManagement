import React from 'react'
import styled from 'styled-components'
import UpperLogo from '../Atoms/UpperLogo'
import StyledButton from '../Atoms/StyledButton'
import StyledInput from '../Atoms/StyledInput'

const UpperContainer = styled.div `
  display: grid; 
  width: 100%; 
  grid-template-columns: 2fr 8fr 2fr;
  height: 50%;
  align-items: center; 
  justify-content: center; 
  display: grid; 
`

const InputContainer = styled.div `
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const TopSearchContainer = props => {
  const { handleAddProductButton } = props
  return (
    <>
      <UpperContainer>
        <UpperLogo/>
        <InputContainer>
          <StyledInput
            placeholder='search for products' 
            margin={'5px'}
            type="text" 
          />
        </InputContainer>
        <StyledButton
          margin={'20px'} 
          type='button' 
          value='Add New Product'
          onClick={() => handleAddProductButton() }
        />
      </UpperContainer>
    </>
  )
}

export default TopSearchContainer