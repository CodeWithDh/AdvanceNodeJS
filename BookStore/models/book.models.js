const {pgTable,uuid,integer,varchar,text} =require("drizzle-orm/pg-core")
const {authorsTable} = require("./author.models")

export const booksTable=pgTable("books",{
    id:integer().uuid().primaryKey(),
    title:varchar({ length:100 }).notNull(),
    description:text(),
    authorId:uuid()
    .references(()=> authorsTable.id)
    .notNull()
})

module.exports= booksTable