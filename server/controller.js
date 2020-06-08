const { Product, Brand, Vendor, CampSet, SetComponents } = require('../db/models.js')

module.exports = {
  getProduct: (req, res) => {  
    const requestId = Number(req.params.id)
    Product.findOne({ where: {id: requestId }})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(() => {
      res.status(404).end();
    })
  },

  deleteProduct: (req, res) => {
    const deleteId = Number(req.params.id)
    Product.destroy({
      where: {id: deleteId}
    })
    .then(() => {
      res.status(204).send(`deleted product`)
    })
    .catch(err => console.error(err));
  },

  updateProduct: (req, res) => {
    const updateId = Number(req.params.id)
    const { name, sku, price, description, vendor_id, brand_id } = req.body
    Product.update({
      name, description, price, sku, vendor_id, brand_id},
      { returning: true, where: { id: updateId }
      })
    .then(([ rowsUpdated, [data] ]) => {
      res.status(201).send(data)
    })
    .catch(error => `error in updating the Product: ${error}`)
  },

  getAllProducts: (req, res) => {
    Product.findAll({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(error => `error in getting the Products: ${error}`)
  },

  addProduct: (req, res) => {
    const { name, sku, price, description, vendor_id, brand_id } = req.body
    Product.create({ 
      name, description, price, sku, vendor_id, brand_id
    })
    .then(data => {
      res.status(201).send(data)
    })
    .catch(error => console.log(`error sending new Product to database ${error}`))
  },

  addSet: (req, res) => {

  },

  getAllSets: (req, res) => {

  },

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
