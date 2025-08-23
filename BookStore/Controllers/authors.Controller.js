const db = require("../db/index");
const {booksTable,authorsTable} = require("../Models/index.models")
const { eq } = require("drizzle-orm")


async function getAuthors(req,res){
    try{
        const authors= await db.select().from(authorsTable);
        
        if(authors){
            return res.status(200).json(authors)
        }else{
            throw new Error("No authors found")
        }
    }catch(err){
        console.log("Error for all authors : ",err)
        return res.status(400).json({error:"No Author found"}) 
    }
}

async function getAuthorById(req,res){
    try{
        const [author]= await db.select().from(authorsTable)
        .where(eq(authorsTable.id,req.params.id))
        
        if(author){
            return res.status(200).json(author)
        }else{
            throw new Error("No Author Found")
        }
    }catch(err){
        console.log("Error for getting AuthorById : ",err)
        return res.status(400).json({error:`No Author Found by id : ${req.params.id}`}) 
    }
}
async function createAuthor(req,res){
    try{
        const {firstName,lastName,email}=req.body
        const [result]= await db.insert(authorsTable).values({
            firstName,
            lastName,
            email,
        }).returning({
            id:authorsTable.id
        })
        
        if(result){
            return res.status(201).json({msg:`New Author Created with id: ${result.id}`})
        }else{
            throw new Error("Author not created!")
        }
    }catch(err){
        console.log("Error while creating Authors : ",err)
        return res.status(400).json({error:`Author not created!`}) 
    }
}
async function getAuthorBooks(req,res){
    try{
        const [authorBooks]= await db.select().from(booksTable)
        .where(eq(booksTable.authorId,req.params.id))
        
        if(authorBooks){
            return res.status(200).json({authorBooks})
        }else{
            throw new Error("No Book found")
        }
    }catch(err){
        console.log("No Book Found!: ",err)
        return res.status(400).json({error:`No Book found with id: ${req.params.id}`}) 
    }
}
async function deleteAuthorById(req,res){
    try{
        console.log(req.params.id)
         const [result]= await db.delete(authorsTable).where(eq(authorsTable.id,req.params.id)).returning({
            id:authorsTable.id
        })
        
        if(result){
            return res.status(200).json({msg:`ID: ${result.id} deleted`})
        }else{
           throw new Error("No Author found")
        }
    }catch(err){
        console.log("No Author Found!: ",err)
        return res.status(400).json({error:`No Author found with id: ${result.id}`}) 
    }
}


module.exports={
    getAuthors,
    getAuthorById,
    createAuthor,
    getAuthorBooks,
    deleteAuthorById
}