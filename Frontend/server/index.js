const express = require('express')
const path = require ('path')
const parser = require ('body-parser')
const cors = require('cors')

const port = 3000;
const app = express();

app.use(cors())
app.use(parser.json());
app.use(parser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, '../client/dist')))

app.listen(port, () => console.log(`connected to port ${port}`))