const {pgTable,uuid} = require("drizzle-orm/pg-core")


export const authorsTable=pgTable("authors",{
    id:uuid().primaryKey().notNull(),
    firstName:varchar({ length: 55 }),
    lastName:varchar({ length: 55 }),
    email:varchar({ length:255 }).notNull().unique()
})