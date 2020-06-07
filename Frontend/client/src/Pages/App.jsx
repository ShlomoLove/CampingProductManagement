import React, { Component } from 'react'
import styled from 'styled-components'
import ProductGrid from '../Components/Organisms/ProductGrid'
import NewProduct from '../Components/Organisms/NewProduct'
import ProductInfo from '../Components/Organisms/ProductInfo' 

const MainContainer = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  background: #F5FFFA;  
`

class App extends Component {
  constructor () {
    super ()
    this.state = {
      display: 'ProductGrid',
      featuredProduct: '',
      sets: [],
      brands: [],
      vendors: [],
    }
  }

  componentDidMount() {
  
  }

  render () {
    const { display } = this.state
    console.log (this.state, 'state')
    return (
      <>
        <MainContainer>
            {display === 'ProductGrid' && (
              <ProductGrid/>
            )}
            {display === 'NewProduct' && (
              <NewProduct/>
            )}
            {display === 'ProductInfo' && (
              <ProductInfo/>
            )}
        </MainContainer>
      </>
    )
  }
}

export default App