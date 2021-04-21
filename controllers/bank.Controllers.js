
const path = require('path');
const fs = require('fs');
// const DB = require( filePath=path.join(__dirname,'../users.json'));




// find user in db ---------------------------------------------------
const findUser=(id, data)=>{
    const i = data.map(p => {
        return p.id
    }).indexOf(id)
    console.log(i)  
   //  const user = data.find((user) => user.id === id).indexOf(id);
 
    return i
}





// add user--------------------------------------------------------------
const addUser = (req, res) => {
     const  id = req.body.id;
    //  console.log(req.body.id);
    //  const  {id} = req.body;
    
    const user = { 
        id: Number(id),
        cash: 0, 
        credit: 0,
    }
    // const filePath=path.join(__dirname,'../users.json')
    
    fs.readFile(filePath, (err, data) => {
        jData = JSON.parse(data) ;
        jData.push(user);         
        fs.writeFile(filePath, JSON.stringify(jData), err => console.log(err));
        res.status(201).json(user)

        return 
     })
   
}
     





//depositing-----------------------------------------------------------------------------
const deposit = (req, res) => {
    
    const {id} = req.params;  
    const {amount} = req.body;
    console.log(req.params);

    fs.readFile(filePath, (err, data) => {
        jData = JSON.parse(data)
        const user =  findUser(id, jData)
console.log(user);
        if ((user !== -1) && amount>=0) {
            jData[user].cash += amount
        

            fs.writeFile(filePath, JSON.stringify(jData), (err) => {
                console.log(err)
            })
            res.status(200).json(` ${amount} added to ${jData[user].id } `)
        } else {
           res.status(404).json('user not found')  
        }
     

    })}


//change credit-----------------------------------------------------------------------------
const creditUpdate =(req, res) => {

    let id = req.params.id
    let credit = req.body.credit

    fs.readFile(filePath, (err, data) => {
        jData = JSON.parse(data)
        let user =  findUser(id, jData)

        if ((user !== -1) && credit>=0) {

            jData[user].credit = credit
            fs.writeFile(filePath,JSON.stringify(jData),(err) =>{
                console.log(err)
            })
            (res.status(200).json(` ${filePath[user].id } have ${credit} credit `)  )
        } else {
            res.status(404).json('user not found or credit not proper')
        }
        
    })
}

//withdraw -----------------------------------------------------------------------------

const withdraw = (req,res) =>{

    const id = req.params.id
    const amount = req.body.cash

   

    fs.readFile(filePath, (err, data) => {
        jData = JSON.parse(data)
        const user = findUser(id ,jData)
        
       if ((user !== -1)&&(amount >= 0)) {
           if ((jData[user].cash - amount )>= -jData[user].credit){ 
                jData[user].cash -= amount;
            }
            fs.writeFile(filePath,JSON.stringify(jData),(err) =>{
                console.log(err)
            })
            (res.status(200).json(` ${amount} reduced from ${filePath[user].id } `)  )
        
        
        } else {
             res.status(404).json('user not found or no balance')
         }
    })
}
//transfer-----------------------------------------------------------------------------


const transfer = (req,res) =>{

    const {id1,id2} = req.params
    const amount = req.body.cash

    fs.readFile(filePath,(error,data) =>{

        jData = JSON.parse(data)

        let user1 = findUser(id1, jData)
        let user2 = findUser(id2, jData)

        
        if(user1 !== -1 && user2 !==-1 && (amount >= 0 ) ){
            
            
            if(jData[user1].cash - amount >= -jData[user1].credit){
                
                jData[user1].cash -= amount
                jData[user2].cash += amount
            }

        
            fs.writeFile(filePath,JSON.stringify( jData),err => console.log(err))

        }else {
            res.status(404).json('user not found or amount not positive')
        }

    })

}

//get a user-----------------------------------------------------------------------------
const getUser = (req,res) =>{

    const {id} = req.body
    console.log(id)
    fs.readFile(filePath, (err, data) => {
        jData = JSON.parse(data);
        let user = findUser(id, jData);
        console.log(user);
        (user === -1) ? res.status(404).json('user not found'): res.status(200).json(user);
        


    })
}
//get all users-----------------------------------------------------------------------------

const getAll = (req,res) =>{
    
   
    fs.readFile( filePath ,(error,data)=>{
        jData = JSON.parse(data)
        
       return res.status(200).json(jData)

       
        

    })

}



module.exports = {
    addUser,
    deposit,
    withdraw,
    creditUpdate,
    transfer,
    getUser,
    getAll,
    
}