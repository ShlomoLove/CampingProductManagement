const connection = require ('./index.js')
const {  DataTypes } = require ('sequelize')

const Brand = connection.define('Brand', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT, 
    allowNull: false
  }
})

const Vendor = connection.define('Vendor', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT, 
    allowNull: false
  },
})

const Product = connection.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT, 
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  sku: {
    type: DataTypes.INTEGER,
  },
  vendor_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Vendor, 
      key: 'id',
    }
  },
  brand_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Brand,
      key: 'id'
    }
  },
})

const Parts = connection.define('Parts', {
  id: {
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true, 
    allowNull: false
  }, 
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  parent_id: {
    type: DataTypes.INTEGER,
    model: Product,
    key: 'id'
  }
})

const CampSet = connection.define('CampSet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
})

const SetComponents = connection.define('SetComponents', {
  set_id: {
    type: DataTypes.INTEGER, 
    primaryKey: false,
    allowNull: false,
    references: {
      model: CampSet,
      key: 'id'
    }
  },
  product_id: {
    type: DataTypes.INTEGER, 
    primaryKey: false,
    allowNull: false,
    references: {
      model: Product,
      key: 'id'
    }
  },
})

module.exports = { Product, Brand, Vendor, CampSet, SetComponents, Parts }