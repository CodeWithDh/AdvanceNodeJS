import express from "express"
const app=express()
const PORT= 8000;

app.use(express.json())


app.listen(PORT,()=>console.log(`Server is live at http://localhost:${PORT}`));

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Server is live"})
})

