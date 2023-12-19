const express=require('express');
let routes=express.Router();
routes.get('/',(req,res)=>{
    res.end('helooo');
})
module.exports=routes;