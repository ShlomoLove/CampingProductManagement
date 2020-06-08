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
      featuredProduct: null,
      sets: [],
      brands: [],
      vendors: [],
      productsDisplay: [],
      newName: '',
      newSku: '',
      newPrice: '',
      newDescription: '',
      newBrand: '',
      newVendor: '', 
      addABrand: '',
      addAVendor: ''
    }
  }

  componentDidMount() {
    const axiosPromise = ['/camping/products/', '/camping/brands/', '/camping/vendors/']
    axios
    .all(axiosPromise.map(table => axios.get(table)))
    .then(responses => {
      this.createDisplayProductObject({products: responses[0].data, brands: responses[1].data, vendors: responses[2].data}, true)
    })
    .catch(error => console.log (`error getting the data on load: ${error}` ))
  }

  getAllItems = (item) => { 
    const { products, brands, vendors } = this.state
    axios
    .get(`/camping/${item}/`)
    .then(({data}) => {
      if (item === 'products') {
        this.createDisplayProductObject({products: data, brands, vendors}, true)
      }
      if (item === 'brands') {
        this.createDisplayProductObject({products, brands: data, vendors}, false)
      }
      if (item === 'vendors')
        this.createDisplayProductObject({products, brands, vendors: data}, false)
    })
    .catch(error => console.log (`error in getting brands ${error}`))
  }

  createDisplayProductObject = (rawObject, reset) => {
    let productOutputArray = []
    for (let product of rawObject.products) {
      let brand_id = product.brand_id
      let vendor_id = product.vendor_id

      if (brand_id !== undefined) {
        for (let brand of rawObject.brands) {
          if (brand.id === brand_id) {
            product.brand = brand.name
            break
          }
        }
      }

      if (vendor_id !== undefined) {
        for (let vendor of rawObject.vendors) {
          if (vendor.id === vendor_id) {
            product.vendor = vendor.name
            break
          }
        }
      }
      productOutputArray.push(product)
    }
    if (reset) {
      this.setState({
        brands: rawObject.brands,
        vendors: rawObject.vendors,
        products: productOutputArray,
        productsDisplay: productOutputArray,
        display: 'ProductGrid', 
        newName: '', 
        newDescription: '', 
        newPrice: '', 
        newSku: '' })
    } else {
      this.setState({
        brands: rawObject.brands,
        vendors: rawObject.vendors,
        products: productOutputArray,
        productsDisplay: productOutputArray
      })
    }
  }

  handlePageChange = (location, product) => {
    if (location === 'ProductInfo') {
      this.setState ({ display: location,
          featuredProduct: product,
          newBrand: product.brand,
          newVendor: product.vendor,
          newName: product.name,
          newDescription: product.description,
          newPrice: product.price,
          newSku: product.sku
        })
    } else {
      this.setState ({ display: location })
    }
  }

  updateValue = (value, key ) => {
    this.setState({
      [key]: value
    })
  }

  addVendor = () => { 
    const { addAVendor } = this.state
    axios
    .post('/camping/vendors/', {
      name: addAVendor
    })
    .then(({data}) => {
      this.setState({newVendor: data.id, addAVendor: ''})
      this.getAllItems('vendors')
    })
    .catch(error => console.log (`error adding new vendor: ${error}`))
  } 

  addBrand = () => { 
    const { addABrand } = this.state
    axios
    .post('/camping/brands/', {
      name: addABrand
    })
    .then(({data}) => {
      this.setState({newBrand: data.id, addABrand: ''})
      this.getAllItems('brands')
    })
    .catch(error => console.log (`error adding new brand: ${error}`))
  } 


  submitProduct = (type) => {
    const { newName, newDescription, newPrice, newSku, newBrand, featuredProduct} = this.state
    if (newName === undefined) return 
    const submitName = newName
    const submitDescription = newDescription ? newDescription : null
    const submitPrice = newPrice ? Number(newPrice) : null
    const submitSku = newSku ? Number(newSku) : null
    // const newBrand = newProduct.brand ? newProduct.brand : null
    if (type === 'new') {
        axios
        .post('/camping/products/', {
          name: submitName,
          description: submitDescription,
          price: submitPrice,
          sku: submitSku,
        })
        .then(data => {
          this.getAllItems('products')
        })
        .catch(error => console.log (`error adding new product: ${error}`))
      }
      if (type === 'update') {
        axios
        .put(`/camping/products/${featuredProduct.id}`, {
          name: submitName,
          description: submitDescription,
          price: submitPrice,
          sku: submitSku,
        })
        .then(data => {
          this.getAllItems('products')
        })
        .catch(error => console.log (`error adding new product: ${error}`))
      }
    }

  handleDelete = (product) => {
    console.log (product)
    axios
    .delete(`/camping/products/${product.id}`)
    .then(data => {
      this.getAllItems('products')
    })
    .catch(error => console.log (`error adding new product: ${error}`))
  }

  handleProductSearch = (e) => {
    const { products } = this.state
    let searchValue = e
    const filterProducts = (product) => {
      if (product.name.toLowerCase().includes(searchValue.toLowerCase())) return true
      if (product.brand && product.brand.toLowerCase().includes(searchValue.toLowerCase())) return true
      if (product.vendor && product.vendor.toLowerCase().includes(searchValue.toLowerCase())) return true
      return false
    }
    let productSearchResults = products.filter(product => filterProducts(product))
    this.setState({productsDisplay: productSearchResults})
  }

  render () {
    const { display,
      vendors,
      brands,
      products, 
      newName, 
      newPrice, 
      newDescription, 
      newSku, 
      newBrand,
      productsDisplay, 
      featuredProduct,
      newVendor,
      addABrand,
      addAVendor
    } = this.state
    console.log (this.state, 'state')
    return (
      <>
        <MainContainer>
            {display === 'ProductGrid' && (
              <ProductGrid 
                products={products}
                productsDisplay={productsDisplay} 
                vendors={vendors} 
                brands={brands} 
                handlePageChange={this.handlePageChange}
                handleDelete={this.handleDelete}
                handleProductSearch={this.handleProductSearch}
              />
            )}
            {display === 'NewProduct' && (
              <NewProduct 
                submitProduct={this.submitProduct}
                newName={newName} 
                newPrice={newPrice}
                newDescription={newDescription}
                newSku={newSku}
                newBrand={newBrand}
                newVendor={newVendor}
                updateValue={this.updateValue}
                vendors={vendors}
                brands={brands}
                addABrand={addABrand}
                addAVendor={addAVendor}
                addVendor={this.addVendor}
                addBrand={this.addBrand}
              />
            )}
            {display === 'ProductInfo' && (
              <ProductInfo
                submitProduct={this.submitProduct}
                featuredProduct={ featuredProduct }
                newName={newName} 
                newPrice={newPrice}
                newDescription={newDescription}
                newSku={newSku}
                newBrand={newBrand}
                newVendor={newVendor}
                updateValue={this.updateValue}
                brands={brands}
                vendors={vendors}
                addABrand={addABrand}
                addAVendor={addAVendor}
                addVendor={this.addVendor}
                addBrand={this.addBrand}
              />
            )}
        </MainContainer>
      </>
    )
  }
}

export default App