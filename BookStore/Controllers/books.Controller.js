const {booksTable,authorsTable} =require("../Models/index.models")
const {eq, Table, ilike} =require("drizzle-orm")
const db =require("../db/index")

async function getBooks(req,res){
    const search=req.query.search;
    if(search){
        const books= await db.select().from(booksTable).where(ilike(booksTable.title,`%${search}%`))
        return res.json(books)
    }else{
    const books = await db.select().from(booksTable)
    res.json(books)
    }
    
}

async function getBookById(req,res){
    const Id=req.params.id;
    const [book] = await db
    .select()
    .from(booksTable)
    .where(table=> eq(table.id,Id))
    .limit(1)
    res.status(201)
    .json(book)
}

async function createBook(req,res){
    const {title,description,authorId}=req.body;
    const [result]=await db.insert(booksTable)
    .values({
        title,
        description,
        authorId,
    }).returning({
        id:booksTable.id
    })

    if(result.id){
        res.status(201).json({msg:"Book Created Successfully"})
    }else{
        res.status(201).json({error:"ERROR while creating book"})
    }
}

async function deleteBookById(req,res){
    const Id=req.params.id;
    await db
    .delete(booksTable)
    .where(eq(booksTable.id,Id))
    res.status(201).json(`Book with id ${Id} Deleted`)
}

module.exports={
    getBookById,
    getBooks,
    createBook,
    deleteBookById
}