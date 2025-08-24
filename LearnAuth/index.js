import express from "express"
const app=express()
const PORT= 8000;

app.use(express.json())

let diary={
    "0001":{
        name:"Shivam Dhingra",
        email:"codewithdh@gmail.com",
        password:"Shivam.123"
    }
}
const emails=new Set();

app.listen(PORT,()=>console.log(`Server is live at http://localhost:${PORT}`));

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Server is live"})
})


app.post("/signUp",async(req,res)=>{
    const {name,email,password} = req.body;
    if(!email){
        return res.status(400).json({msg:`Missing Email`})
    }
    if(emails.has(email)){
        return res.status(200).json({msg:`User Already Exist with ${email}`})
    }
    const token = Date.now();
    diary[token]={
        name,
        email,
        password,
    }
    return res.status(201).json({msg:"SignUp successfully",token:`${token}`})

})

app.post("/profile",async(req,res)=>{
    let{token}=req.body;

    if(!token){
        return res.status(400).json({msg:`Missing Token`})
    }
    if(!(token in diary)){
        return res.status(404).json({msg:`Invalid Token : ${token}`})
    }

    const profile=diary[token];

    res.status(200).json(profile)

})