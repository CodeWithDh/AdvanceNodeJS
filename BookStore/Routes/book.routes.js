const express=require("express");
const router=express.Router();
const {getBooks,getBookById,createBook,deleteBookById}  =require("../Controllers/books.Controller")




router.get("/",getBooks)

router.get("/:id",getBookById)

router.post("/",createBook)

router.delete("/:id",deleteBookById)

module.exports=router;