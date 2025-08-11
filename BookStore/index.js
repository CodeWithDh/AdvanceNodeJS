const express =require("express");
const app=express();
const port=3000;

// Middlewares
app.use(express.json());



let books=[
    {
        id:1,
        title:"ChitraGupt Morya",
        author:"Sanskrit Auhtor",
    },
    {
        id:2,
        title:"SpiderMan-2",
        author:"Marvel",
    },
    {
        id:3,
        title:"How To Make Friends And Influence People",
        author:"Dale Carniege",
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
    // console.log(req.body.name);
    
    res.send("All Books Are Here");
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
    let {title,author}=req.body;
    if(!title||title.trim()==='') return res.status(400).json({Error:"Title should not be empty"});
    if(!author||author.trim()==='') return res.status(400).json({Error:"Author is Required"});

    let book={
        id:books.length+1,
        title:title,
        author:author
    }
    books.push(book)
    res.status(201).json({response:"Book created"})
    
})
app.delete("/books/:id",(req,res)=>{
    let Id=req.params.id
    if(books.find(book=>book.id==Id)){
        books=books.filter(book=>book.id!=Id)
    res.json({response:`Book with id: ${Id} deleted successfully`})
    }
    res.status(404).json(`Book id : ${Id} not found`)
    
})



