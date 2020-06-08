import React from 'react'
import styled from 'styled-components'
import TopBannerContainer from '../Molecules/TopBannerContainer'
import TopSearchContainer from '../Molecules/TopSearchContainer'
import CenterWindow from '../Atoms/CenterWindow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TopGrid = styled.div `
  display: grid;
  grid-template-columns: 5fr 3fr 3fr 1fr; 
  border-bottom: 1.5px solid #A9A9A9;
  padding-bottom: 15px;  
`

const InnerItemGrid = styled.div `
  display: grid;
  align-items: center;
  grid-template-columns: 5fr 3fr 3fr; 
`

const OuterItemGrid = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr;
  border-bottom: 2px solid #F5F5F5;
  margin-left: 10px; 

  &:hover {
    box-shadow: 1px 1px 8px 3px rgba(33, 27, 27, .1);
    cursor: pointer;
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
  const { products,
          productsDisplay,
          vendors, 
          brands, 
          handlePageChange, 
          handleDelete,
          handleProductSearch,
        } = props
  return (
    <>
      <TopBannerContainer>
        <TopSearchContainer handlePageChange={handlePageChange} handleProductSearch={handleProductSearch}/>
      </TopBannerContainer>
      <CenterWindow>
        <TopGrid>
          <StyledTitle size={'18px'} weight={400}> Product Name </StyledTitle>
          <StyledTitle size={'18px'} weight={400}> Price </StyledTitle>
          <StyledTitle size={'18px'} weight={400}> Sku </StyledTitle>
          <StyledTitle size={'18px'} weight={400}></StyledTitle>
        </TopGrid>
        
        { productsDisplay !== undefined && (
          <div>
          {productsDisplay.map(product => {
            return (
              <OuterItemGrid>
                <InnerItemGrid onClick={() => handlePageChange('ProductInfo', product)}>
                  <StyledTitle size={'16px'} weight={200}>{product.name}</StyledTitle>
                  <StyledTitle size={'16px'} weight={200}>${product.price}</StyledTitle>
                  <StyledTitle size={'16px'} weight={200}>{product.sku}</StyledTitle>
                  </InnerItemGrid>
                  <TrashLogoContainer>
                    <StyledIcon icon={faTrashAlt} onClick={()=>handleDelete(product)}/>
                  </TrashLogoContainer>
              </OuterItemGrid>
            )
          })}
        </div>
        )}
      </CenterWindow> 
    </>
  )
}

export default ProductGrid