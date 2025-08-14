const express=require("express");
const router=express.Router();
const {booksTable,authorsTable} =require("../Models/index.models")
const db =require("../db/index")



router.get("/",async(req,res)=>{
    const books = await db.select().from(booksTable)
    res.json(books)
    // console.log(req.body.name);
})
router.get("/:id",(req,res)=>{
    let Id=parseInt(req.params.id);
    if(isNaN(Id))
        return res.status(400).json({error:`id must be typr of number`});
    const book=books.find(book=>book.id==Id);
    if(book){
        return res.status(200).json(book);
    };
    res.status(404).json({message:"Book Not Found"})
    // res.send("Here is you Book of Id : "+Id);
})
router.post("/",(req,res)=>{
    let {title,author}=req.body;
    if(!title||title.trim()==='') return res.status(400).json({Error:"Title should not be empty"});
    if(!author||author.trim()==='') return res.status(400).json({Error:"Author is Required"});

    else{
        let book={
        id:books.length+1,
        title:title,
        author:author
        }
        books.push(book)
        res.status(201).json({response:"Book created"})
    }
    
})
router.delete("/:id",(req,res)=>{
    let Id=parseInt(req.params.id)
    if(isNaN(Id))
        return res.status(400).json({error:`id must be typr of number`});
    if(books.find(book=>book.id===Id)){
        books=books.filter(book=>book.id!=Id)
        return res.json({response:`Book with id: ${Id} deleted successfully`})
    };
    res.status(404).json(`Book id : ${Id} not found`)
    
})

module.exports=router;