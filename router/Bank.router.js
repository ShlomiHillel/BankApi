const express = require('express');
const router = express.Router();
const Controller = require('../controllers/bank.Controllers')


router.post('/addUser', (req, res) => {
    console.log("add");
    Controller.addUser(req, res);    
})

router.put('/deposit/:id', (req, res) => {
    console.log("depo");
    Controller.deposit(req, res);    
})

router.put('/credit/:id',(req, res) => {
    console.log("misgeret");
    Controller.creditUpdate(req, res);    
})
router.put('/withdraw/:id',(req, res) => {
    console.log("take m");
    Controller.withdraw(req, res);    
})

router.put('/transfer/:id1/:id2',(req, res) => {
    console.log("trans");
    Controller.transfer(req, res);    
})
router.get('/allUsers',(req, res) => {
    console.log("show");
    Controller.getAll(req, res);
})

router.get('/user/:id',(req, res) => {
    console.log("showOne");
    Controller.getUser(req, res)
})


module.exports= router;
