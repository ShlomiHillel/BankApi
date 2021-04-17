const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const bankRoute=require('./router/Bank.router')
const port = 8000;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('',bankRoute)





app.listen(port, () => {
    console.log(`application start at ${port}`)
  })
  