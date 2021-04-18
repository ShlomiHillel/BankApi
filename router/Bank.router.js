const express = require('express');
const router = express.Router();
const Controller = require('../controllers/bank.Controllers')


router.post('/addUser', (req, res) => {
    Controller.addUser(req, res);    
})

router.put('/deposit/:id', (req, res) => {
    Controller.deposit(req, res);    
})


module.exports= router;
