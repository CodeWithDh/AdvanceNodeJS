const express =require("express");
const app=express();
const port=3000;
const BookRouter =require("./Routes/book.routes")

// Middlewares
app.use(express.json());


// Routes
app.use("/books",BookRouter)

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

app.get("/",(req,res)=>{
    res.send("Ready to create Book Store");
})



