



// const fs = require('fs');
// const DB = require('../BankDB.json')


const DB = [{ 
    id : 10,
    cash : 0, 
    credit : 0,
},
{ 
    id : 11,
    cash : 66, 
    credit : 0,
}
]

const findUser=(id)=>{
    i = DB.map(el => el.id ).indexOf(id)
       
    // const user = DB.find((user) => user.id === +id).indexOf(id);
    // return user
    return i
}



// add user--------------------------------------------------------------
const addUser = (req, res) => {
     const  id = req.body.id;
    //  const  {id} = req.body;

    const user = { 
        id: +id,
        cash: 0, 
        credit: 0,
    }

    DB.push(user);
    return res.send(user);
}
    // fs.readFile('BankDB.json', (error, data) => {
    //     data = JSON.parse(data)
    //     data.push(user)
    //     fs.writeFile('BankDB.json', JSON.stringify(data), err => console.log(err))
    // })





//depositing-----------------------------------------------------------------------------
const deposit = (req, res) => {
    const {id} = req.params;  
    const {amount} = req.body

    const user = findUser(id);

    (user === -1) ? res.status(404).send('user not found')  : (DB[user].cash += amount) && (res.send(`${DB[user].id} have ${DB[user].id } `));

    }

        //         fs.readFile('BankDB.json', (err, data) => {
        //         data = JSON.parse(data)
        //         const user = findUser(id);
        //         DB[user].cash += amount;
        //         fs.writeFile('BankDB.json', JSON.stringify(data), (err) => {
        //                 console.log(err)
        //          })
        //             res.send(`${DB[user].id} have ${DB[user].id } `)
        //         } 
        //     })





module.exports = {
    addUser,
    deposit,
    
}