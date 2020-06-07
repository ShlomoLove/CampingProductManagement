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
      newName: '',
      newSku: '',
      newPrice: '',
      newDescription: '',
      newBrand: ''
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

  handleAddProductButton = () => {
    this.setState ({ display: 'NewProduct' })

  }

  updateValue = (event, key ) => {
    this.setState({
      [key]: event.target.value
    })
  }

  submitNewProduct = () => {
    const { newName, newDescription, newPrice, newSku, newBrand} = this.state
    if (newName === undefined) return 
    const submitName = newName
    const submitDescription = newDescription ? newDescription : null
    const submitPrice = newPrice ? Number(newPrice) : null
    const submitSku = newSku ? Number(newSku) : null
    // const newBrand = newProduct.brand ? newProduct.brand : null
    axios
    .post('/camping/products/', {
      name: submitName,
      description: submitDescription,
      price: submitPrice,
      sku: submitSku,
    })
    .then(data => {
      this.getAllItems('products')
      this.setState({ display: 'ProductGrid', 
                    newName: '', 
                    newDescription: '', 
                    newPrice: '', 
                    newSku: '' })
    })
    .catch(error => console.log (`error adding new product: ${error}`))
  }

  render () {
    const { display, vendors, brands, products, newName, newPrice, newDescription, newSku, newBrand } = this.state
    console.log (this.state, 'state')
    return (
      <>
        <MainContainer>
            {display === 'ProductGrid' && (
              <ProductGrid 
                products={products} 
                vendors={vendors} 
                brands={brands} 
                handleAddProductButton={this.handleAddProductButton}
              />
            )}
            {display === 'NewProduct' && (
              <NewProduct 
                submitNewProduct={this.submitNewProduct}
                newName={newName} 
                newPrice={newPrice}
                newDescription={newDescription}
                newSku={newSku}
                newBrand={newBrand}
                updateValue ={this.updateValue}
              />
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