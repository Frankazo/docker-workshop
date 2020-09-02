const mongoose = require ("mongoose")

const express = require("express")
const app = express()

const DATABASE = "mongodb://mymongo:27017/test"

mongoose.connect(DATABASE)
   .then(() => {console.log("DB is running")}) 
   .catch(() => {console.log("DB ERROR")})


app.get("/", (req, res) => {
   res.json({
      message: "Hello World"
   })
})

app.listen(8000, () => {
   console.log("App is running at port 8000")
})

