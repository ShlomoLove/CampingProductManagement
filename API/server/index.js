const express = require('express')
const path = require ('path')
const parser = require ('body-parser')
const router = require('./router.js')
const cors = require ('cors')

const port =  9001;
const app = express();

app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({extended:true}))
app.use('/camping', router)

app.listen(port, () => console.log(`connected to port ${port}`))

module.exports = app
