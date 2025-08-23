const express=require("express");
const router=express.Router();
const {getAuthors,getAuthorById,createAuthor,getAuthorBooks,deleteAuthorById}=require("../Controllers/authors.Controller")

router.get("/",getAuthors)

router.get("/:id",getAuthorById)

router.get("/:id/books",getAuthorBooks)

router.post("/",createAuthor)

router.delete("/:id",deleteAuthorById)

module.exports=router;