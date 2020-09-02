const mongoose = require ("mongoose")

const DATABASE = "mongodb://mymongo:27017/test"

mongoose.connect(DATABASE)
   .then(() => {console.log("DB is running")}) 
   .catch(() => {console.log("DB ERROR")})