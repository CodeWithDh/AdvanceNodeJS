require("dotenv/config")

const{defineConfig}=require("drizzle-kit")

const config=defineConfig({
    out:'./drzzile',
    schema:"./models/index.models.js",
    dialect:"postgresql",
    dbCredentials:{
        url:process.env.DATABASE_URL,
    }
})

module.exports=config;