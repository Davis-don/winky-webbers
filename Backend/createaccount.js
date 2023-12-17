const express=require('express');
var router=express.Router()
const sql=require('mysql')

const connection=sql.createConnection({
    host:'localhost',
    user:'root',
    password:'0000000000'
})

connection.connect((error)=>{
    if(error){
        console.log(error)
    }else{
    console.log('connected');

    //create a database
    connection.query('CREATE DATABASE IF NOT EXISTS Clients ',(error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log('database created')
        }
    })


    //create table
        var sql="USE Clients";
        connection.query(sql);
        var sql="CREATE TABLE IF NOT EXISTS customers(ID INT NOT NULL  AUTO_INCREMENT,userName VARCHAR(255) NOT NULL,email VARCHAR(255) NOT NULL,country VARCHAR(255) NOT NULL,"+
        "contact VARCHAR(255) NOT NULL,password VARCHAR(255) NOT NULL, PRIMARY KEY (ID))";
    connection.query(sql,(error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log('table created')
        }
    })
    }
    })
router.post('/',(req,res)=>{

 let {userName,Email,country,contact,password,confirmpassword}=req.body
   let sql="USE Clients";
    connection.query(sql);
      

       //update database
    if(password===confirmpassword){
        let sql="INSERT INTO customers(userName,email,country,contact,password)"+
        "VALUES ("  + "'" +userName.toString() + "'"  + ","+"'" + Email.toString() +"'"  +","+ "'" + country.toString()+ "'"  + "," + "'" + contact.toString()+ "'" +"," +"'" + password.toString()+ "'"  + ")"
        connection.query(sql,(error)=>{
            if(error){
                console.log(error);
                //res.status(401).json({ message: 'Something went wrong try creating again' });
            }
            else{
                console.log('data updated')
                res.status(401).json({ message: true });
            }
            
        });
        
        }
        else {
            console.log('password dont match');
            res.status(401).json({ message: false });
        }

})

router.get('/',(req,res)=>{
    res.end('HANDLES AT /DATABASHANDLE');
})

module.exports=router;