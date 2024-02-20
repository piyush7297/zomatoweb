const express = require('express')
let app = express();
const cors = require('cors');
const router = require('./App/router');
app.use(cors())
app.use(router)

app.listen('5100',()=>{
    console.log('server started at 5100')
})