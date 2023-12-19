const express=require('express');
const routes=express.Router();
const mysql=require('mysql')
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0000000000'
})

var id;
routes.post('/',(req,res)=>{
let{userName,password}=req.body;


{
    //connects to the database
    let sql="USE clients";
    connection.query(sql);
    
}
{
    //gets data from database
    let sql="SELECT ID FROM customers WHERE userName=" + "'" + userName + "'" + "AND password=" + "'" + password + "'";
    connection.query(sql,(error,result,field)=>{
        if(error){
            console.log(error)
        }
        else{
        
            if((result[0])===undefined){
                console.log('not found')
                res.status(200).json({ message:false });
            }
            else{
                id=result[0].ID
                res.status(200).json({ message:true });   
            }
            
        }
    })
}
})

routes.get('/',(req,res)=>{
    {
        //connect to db
        let sql="USE clients";
        connection.query(sql);
    }
    {
        //get necessary info fron database
        let sql="SELECT * FROM customers where ID="+ "'"+ id + "'";
        connection.query(sql,(error,result,field)=>{
            if(error){
                console.log(error)
            }
            else{
                res.json(result)
            }
        })
    }
    
})


module.exports=routes