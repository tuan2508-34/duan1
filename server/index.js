const mongoose = require('mongoose')
const morgan = require('morgan');
var cors = require('cors')
const express = require('express')
const route = require ('./router/index')
const app = express()
const db=require("./config/index")

db.connect();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


route(app)
app.listen(5000, () => {
   console.log('App listening on port 5000')
})