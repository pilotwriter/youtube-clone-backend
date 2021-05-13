const express = require('express');
const app = express();
const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Server ${PORT} is listened!`)
})
app.get("/hello",(req,res)=>{
     res.json({message:"hi"});
})