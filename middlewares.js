const express=require("express");
const app=express();
const fs = require("fs")
const port=3000;

app.listen(port,(err)=>{
    if(err) console.log("Server Error: ",err);
    console.log("Server is Live at http://localhost:3000");  
})

app.use(express.json());
function Logger(req,res,next){
    let log=[`${Date.now()} ${req.method} ${req.path}\n`]
    fs.appendFileSync('log.txt',log.toString(),"utf-8");
    next();
}

app.use((req,res,next)=>{
    let path=req.path;

    switch(path){
    case "/":
        Logger(req,res,next);
        res.status(200).json({msg:"HomePage"});
        break;
    case "/books":
        res.status(200).json({msg:"Books are shown here"})
        break;
    default:
        res.status(404).json({Error:"Page Not Found"})
        break;
}
})

