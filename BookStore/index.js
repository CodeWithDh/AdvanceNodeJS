require("dotenv/config")
const express =require("express");
const app=express();
const port=3000;
const BookRouter =require("./Routes/book.routes")
const authorRouter =require("./Routes/author.routes")
const {logger} =require("./Middlewares/logger")

// Middlewares
app.use(express.json());
// Routes
app.use("/books",logger,BookRouter)
app.use("/authors",logger,authorRouter)

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

app.get("/",logger,(req,res)=>{
    res.send("Ready to create Book Store");
})



