const express=require('express');
const app=express();
const cors = require('cors');
const bodyparser=require('body-parser');
app.use(bodyparser.json())
app.use(cors()); 
const createaccount=require('./createaccount')
app.use('/createaccount',createaccount)
const login=require('./login')
app.use('/login',login)

app.listen(4000,(error)=>{
    if(error){
        console.log(error)
    }
    console.log('listening on port 4000')
})