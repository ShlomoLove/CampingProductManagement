import React from 'react'
import styled from 'styled-components'
import TopBannerContainer from '../Molecules/TopBannerContainer'
import TopSearchContainer from '../Molecules/TopSearchContainer'
import CenterWindow from '../Atoms/CenterWindow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TopGrid = styled.div `
  display: grid;
  grid-template-columns: 1.5fr 3.5fr 3.5fr 3.5fr; 
`

const ItemGrid = styled.div `
  display: grid;
  align-items: center;
  grid-template-columns: 1.5fr 3.5fr 3.5fr 3.5fr; 
  border-bottom: 1px solid #F5F5F5;

  &:hover {
    box-shadow: 1px 1px 8px 3px rgba(33, 27, 27, .1);
    cursor: pointer;
  }
`

const TrashLogoContainer = styled.div `
  display: flex; 
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  width: 100%;    
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: #b22222;
  font-size: 20px;
  margin: 10px;
  margin-top: 20px; 
  
  &:hover {
    color: #d62929;
    cursor: pointer; 
  }
`

const StyledTitle = styled.h4 `
  font-family: 'Roboto', sans-serif;
  color: #696969;
  font-weight: ${props => props.weight}; 
  font-size: ${props => props.size};
  margin: 5px;
  margin-top: 20px; 
  padding: 0;
  text-align: left; 
`

const StyledSelectBox = styled.div `
  height: 12px;
  width: 12px;
  margin-top: 10px;   
  border: 1px solid #efa9a9;
  border-radius: 4px; 
`

const OuterStyledBox = styled.div `
  display: flex;
  width: 100%; 
  justify-content: center;
  align-items: center;
`

const ProductGrid = props => {
  const { products, display, vendors, brands, handleAddProductButton } = props
  return (
    <>
      <TopBannerContainer>
        <TopSearchContainer handleAddProductButton={handleAddProductButton}>
        </TopSearchContainer>
      </TopBannerContainer>
      <CenterWindow>
        <TopGrid>
          <TrashLogoContainer>
            <StyledIcon icon={faTrashAlt} />
          </TrashLogoContainer>
          <StyledTitle size={'18px'} weight={400}> Product Name </StyledTitle>
          <StyledTitle size={'18px'} weight={400}> Price </StyledTitle>
          <StyledTitle size={'18px'} weight={400}> Sku </StyledTitle>
        </TopGrid>
        
        { products !== undefined && (
          <div>
          {products.map(product => {
            return (
              <ItemGrid>
                <OuterStyledBox>
                  <StyledSelectBox/>
                </OuterStyledBox>
                <StyledTitle size={'16px'} weight={200}>{product.name}</StyledTitle>
                <StyledTitle size={'16px'} weight={200}>${product.price}</StyledTitle>
                <StyledTitle size={'16px'} weight={200}>{product.sku}</StyledTitle>
              </ItemGrid>
            )
          })}
        </div>
        )}
      </CenterWindow> 
    </>
  )
}

export default ProductGrid