import React from 'react'
import styled from 'styled-components'
import TopBannerContainer from '../Molecules/TopBannerContainer'
import TopSearchContainer from '../Molecules/TopSearchContainer'
import CenterWindow from '../Atoms/CenterWindow'

const ProductGrid = props => {
  return (
    <>
      <TopBannerContainer>
        <TopSearchContainer>
        </TopSearchContainer>
      </TopBannerContainer>
      <CenterWindow/> 
    </>
  )
}

export default ProductGrid