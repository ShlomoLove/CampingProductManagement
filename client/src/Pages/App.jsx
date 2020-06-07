import React, { Component } from 'react'
import axios from 'axios'
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
    const axiosPromise = ['/camping/products/', '/camping/brands/', '/camping/vendors/']
    axios
    .all(axiosPromise.map(table => axios.get(table)))
    .then(responses => {
      this.setState({products: responses[0].data, brands: responses[1].data, vendors: responses[2].data})
    })
    .catch(error => console.log (`error getting the data on load: ${error}` ))
  }

  getAllItems = (item) => {
    axios
    .get(`/camping/${item}/`)
    .then(({data}) => {
      this.setState({
        [item]: data
      }) 
    })
    .catch(error => console.log (`error in getting brands ${error}`))
  }

  render () {
    const { display, vendors, brands, products } = this.state
    console.log (this.state, 'state')
    return (
      <>
        <MainContainer>
            {display === 'ProductGrid' && (
              <ProductGrid products={products} vendors={vendors} brands={brands}/>
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