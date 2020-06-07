const router = require('express').Router()
const { getProduct,
      deleteProduct, 
      updateProduct, 
      addProduct, 
      addSet, 
      addVendor, 
      addBrand, 
      getAllProducts, 
      getAllSets,
      getAllVendors,
      getAllBrands
    } = require('./controller.js')

router
.route('products/')
.get(getAllProducts)
.post(addProduct)

router
.route('products/:id')
.get(getProduct)
.delete(deleteProduct)
.put(updateProduct)

router
.route('set/').get(getAllSets)

router
.route('set/:id').post(addSet)

router
.route('/vendor/')
.get(getAllVendors)
.post(addVendor)

router 
.route('/brand/')
.get(getAllBrands)
.post(addBrand)

module.exports = router