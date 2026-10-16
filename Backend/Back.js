//  const express =require('express');
// const cors=require('cors');
// const mongoose=require('mongoose');

//  const PORT=8080;
//  const app=express();
// require('dotenv').config();
//  app.listen(PORT);
//  app.use(cors());
//  console.log(process.env.NAME);
// app.get('/',(req,res) => {
//      res.send("this my backend")
//  })
 
// app.get('/weather',(req,res) =>{
//   res.json([
//     {city:"attur",temp:34,rain :true}, 
//     {city:"erodu",temp:34,rain :true},
//     {city:"namakkal",temp:34,rain :true},
//     {city:"salem",temp:34,rain :true}, 
//     {city:"vellor",temp:34,rain :true}
//     ])     
//      mongoose.connect(process.env.MONGU_URI)
//      .then((res)=>console.log(res))
//      .catch((res)=>console.log(error))
// })



 const express =require('express');
const cors=require('cors');


 const PORT=8080;
 const app=express();
require('dotenv').config();
 app.listen(PORT);
 app.use(cors());
 console.log(process.env.NAME);
app.get('/weather',(req,res) =>{
  res.json([
     {username:"gmailTest",
      password:"admin123"}   
    ])     

})



379704