const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8010;
// const bankRoute=require('./router/Bank.router')



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//middleware
// app.use('/api',bankRoute)


app.get('/',(req,res)=>{
  res.send('bank api' )
})




// app.listen(port, () => {
//     console.log(`application start at ${port}`)
//   })
  
app.listen(process.env.PORT || 5000)