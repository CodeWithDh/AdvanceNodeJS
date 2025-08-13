const { varchar } = require("drizzle-orm/mysql-core")
const{pgTable,integer}=require("drizzle-orm/pg-core")

const usersTable=pgTable("users",{
    id:integer().primaryKey(),
    name:varchar({length:255}).notNull(),
    email:varchar({length:255}).notNull().unique()
});

module.exports={
    usersTable;
}