const express =require("express");
const port=3000;

const app=express();

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(`http://localhost:${port}`);
    }
    
})

app.get("/",(req,res)=>{
    res.send("HomePage");
})