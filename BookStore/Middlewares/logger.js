const express=require("express");
const fs =require("fs");

exports.logger=function(req,res,next){
    let log=[`${Date.now()} ${req.method} ${req.path}\n`]
    fs.appendFileSync('log.text',log.toString(),"utf-8");
    next();
}