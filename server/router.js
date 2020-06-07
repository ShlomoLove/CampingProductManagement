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
.route('/products/:id')
.get(getProduct)
.delete(deleteProduct)
.put(updateProduct)

router
.route('/products/')
.get(getAllProducts)
.post(addProduct)

router
.route('sets/').get(getAllSets)

router
.route('sets/:id').post(addSet)

router
.route('/vendors/')
.get(getAllVendors)
.post(addVendor)

router 
.route('/brands/')
.get(getAllBrands)
.post(addBrand)

module.exports = router