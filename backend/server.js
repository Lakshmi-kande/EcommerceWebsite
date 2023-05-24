const app = require("./app");


const dotenv = require("dotenv");
const connectDB = require("./config/database")

// config
dotenv.config({path:"backend/config/config.env"});

// connecting to database
connectDB()


app.listen(process.env.PORT,()=> {
    console.log(`server running on ${process.env.PORT}`)
})




