require("dotenv/config")

const{defineConfig}=require("drizzle-kit")

const config=defineConfig({
    out:'./drzzile',
    schema:'./models/index.js',
    dialect:"postgresql",
    dbCredentials:{
        url:process.env.database_url,
    }
})

module.exports=config;