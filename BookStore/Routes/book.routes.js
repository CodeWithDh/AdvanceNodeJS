const express=require("express");
const router=express.Router();
const {booksTable,authorsTable} =require("../Models/index.models")
const {eq, Table} =require("drizzle-orm")
const db =require("../db/index")



router.get("/",async(req,res)=>{
    const books = await db.select().from(booksTable)
    res.json(books)
    // console.log(req.body.name);
})
router.get("/:id",async(req,res)=>{
    let Id=req.params.id;
    const [book]= await db
    .select()
    .from(booksTable)
    .where(table=> eq(table.id,Id))// it will return array as resuplt so we are destructuring it
    .limit(1)
    if(book){
        return res.status(200).json(book);
    };
    res.status(404).json({message:"Book Not Found"})
    // res.send("Here is you Book of Id : "+Id);
})
router.post("/",async(req,res)=>{
    let {title,authorId,description}=req.body;
    if(!title||title.trim()==='') return res.status(400).json({Error:"Title should not be empty"});

    else{
        const [result]=await db.insert(booksTable)
        .values({
            title,
            description,
            authorId
        }).returning({
            id:booksTable.id,
        })
        if(result.id){
            res.status(201).json({response:"Book created"})
        }else{
            res.status(400).json({error:"Something went wrong while creating book."})
        }
    }
    
})
router.delete("/:id",async(req,res)=>{
    let Id=req.params.id
    await db.delete(booksTable).where(eq(booksTable.id,Id))
    res.status(201).json(`Book id : ${Id} is deleted`)
    
})

module.exports=router;