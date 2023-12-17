const express=require('express');
const router=express.Router();
const sql=require('mysql');
const connection=sql.createConnection({
host:'localhost',
user:'root',
password:'0000000000'
})
//connection to database
connection.connect((error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('connected successfully')
    }
})
router.post('/',(req,res)=>{
const {username,password}=req.body
var sql="USE clients";
connection.query(sql);

//gets information for use with inputed usenaqme & password
var sql="SELECT ID FROM customers WHERE username = " + "'" + username +"'" + "AND password=" + "'"+ password+"'";
connection.query(sql,(error,rows,fields)=>{
    if(error){
    console.log('error')
    }
    //checks whether record exists or not
    else{
        if(rows[0]==undefined){
        console.log('record do not exist')
        res.status(401).json({ message: 'Login failed' });
        }
        else{
            console.log('record exists')
            res.status(200).json({ message: 'Login successful' });
        
        }
    }
    
}
)
})
module.exports=router;