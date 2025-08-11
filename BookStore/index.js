const express =require("express");
const app=express();
const port=3000;

// Middlewares
app.use(express.json());



let books=[
    {
        id:1,
        title:"ChitraGupt Morya",
        author:"Sanskrit Auhtor"
    },
    {
        id:2,
        title:"SpiderMan-2",
        author:"Marvel"
    },
    {
        id:3,
        title:"How To Make Friends And Influence People",
        author:"Dale Carniege"
    }
]

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

app.get("/",(req,res)=>{
    res.send("Ready to create Book Store");
})
app.get("/books",(req,res)=>{
    res.json(books)
    // res.send("All Books Are Here");
})
app.get("/books/:id",(req,res)=>{
    let Id=req.params.id;
    const book=books.find(book=>book.id==Id);
    if(book){
        res.json(book);
        res.status(200)
    }
    res.status(404).json({message:"Book Not Found"})
    // res.send("Here is you Book of Id : "+Id);
})
app.post("/books",(req,res)=>{
    console.log(req.headers);
    console.log(req.body);
    res.end('')
})
app.delete("/books/:id",(req,res)=>{
    let Id=req.params.id
    books=books.filter(book=>book.id!=Id)
    res.json(books)
})



