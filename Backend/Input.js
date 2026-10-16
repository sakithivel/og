 const express =require('express');
const cors=require('cors');


 const PORT=8080;
 const app=express();
require('dotenv').config();
 app.listen(PORT);
 app.use(cors());
 console.log(process.env.NAME);
app.get('/',(req,res) => {
     res.send("this my backend")
 })
 
app.get('/weather',(req,res) =>{
  res.json([
     {"username":"gmailTest","password":"admin123"}   
    ])     

})



