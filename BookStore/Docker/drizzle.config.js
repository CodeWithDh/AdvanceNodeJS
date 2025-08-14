const {defineConfig}=require("drizzle-kit")
// dirzzle-kit is used for sending UI for your DB.
const config=defineConfig({
    dialect:postgres,
    out:"./drizzle",
    schema:"./drizzle/schema.js",
    dbCredentials:{
        url:"postgres://admin:admin@localhost:5432/book_db",
    }
})

module.exports=config