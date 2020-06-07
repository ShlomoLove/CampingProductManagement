// const { Product, Brand, Vendor, CampSet, SetComponents } = require('../db/models.js')
// const sequelize = require ('sequelize')
const { Brand, Vendor } = require ('../db/models.js')

module.exports = {
  // getProduct: (req, res) => {

  // },
  // deleteProduct: (req, res) => {

  // },
  // updateProduct: (req, res) => {

  // },
  // addProduct: (req, res) => {
  //   console.log("product")

  // },
  // addSet: (req, res) => {

  // },
    // getAllProducts: (req, res) => {

  // },
  // getAllSets: (req, res) => {

  // },
  addVendor: (req, res) => {
    const name = req.body.name
    Vendor.create({
      name
    })
    .then (data => {
      res.status(201).send(data);
    })
    .catch(error => console.error(`error in the brand post ${error}`));
  },
 
  getAllVendors: (req, res) => {
    Vendor.findAll({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(error => `error in getting all Vendors ${error}`)
  },
  addBrand: (req, res) => {
    const name = req.body.name
    Brand.create({
      name
    })
    .then (data => {
      res.status(201).send(data);
    })
    .catch(error => console.error(`error in the brand post ${error}`));
  },
  getAllBrands: (req, res) => {
    Brand.findAll({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(error => console.log(`error in getting Brands: ${error}`))
  }
}
