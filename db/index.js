const Sequelize = require ('sequelize') 

const connection = new Sequelize ('campproducts', process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST,
  dialect: 'postgres',
  pool: {
    max: 100,
    min: 0, 
    aquire: 30000,
    idle: 10000, 
  }
})

connection.sync({force: false})
  .then(() => {
    console.log('successfully connected to the campproducts database');
  })
  .catch(error => console.error(`Unable to connect to the database: ${error}`))

  module.exports = connection
