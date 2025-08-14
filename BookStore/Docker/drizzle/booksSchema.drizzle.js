const{pgTable,integer,varchar}=require("drizzle-orm/pg-core")

const booksTable=pgTable("users",{
    id:integer().notNull(),
})

module.exports={
    usersTable
}