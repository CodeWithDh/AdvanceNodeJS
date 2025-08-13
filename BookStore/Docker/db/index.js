const {drizzle}=require("drizzle-orm/node-postgres")


// postgres://<username>:<password>@<host>:<port>/<db_name>
const db = drizzle("postgres://admin:admin@localhost:5432/book_db")
